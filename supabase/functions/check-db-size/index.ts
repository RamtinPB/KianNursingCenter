import { serve } from "https://cdn.jsdelivr.net/gh/denoland/deno_std/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";
import nodemailer from "https://cdn.skypack.dev/nodemailer";

// Environment variables
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ALERT_EMAIL = Deno.env.get("ALERT_EMAIL")!;
const BREVO_SMTP_USER = Deno.env.get("BREVO_SMTP_USER")!;
const BREVO_SMTP_PASSWORD = Deno.env.get("BREVO_SMTP_PASSWORD")!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Serve function: Called when the function is triggered
serve(async (req) => {
  try {
    // Query database size from Supabase using the custom function
    const { data, error } = await supabase.rpc("get_database_size");

    if (error) {
      console.error("Error fetching database size:", error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch DB size" }),
        { status: 500 },
      );
    }

    // Convert bytes to MB
    const usedMB = data / (1024 * 1024);
    const totalMB = 500; // Total space you want to track
    const availableMB = totalMB - usedMB;

    console.log(`Database Usage: ${usedMB.toFixed(2)} MB / ${totalMB} MB`);

    // If over 80%, send an email alert
    if (usedMB > 400) {
      await sendEmailAlert(usedMB, availableMB);
    }

    return new Response(
      JSON.stringify({ used: usedMB, available: availableMB }),
      { status: 200 },
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
    });
  }
});

// Function to send email alert when the database usage is too high
async function sendEmailAlert(used: number, available: number) {
  const transporter = nodemailer.createTransport({
    service: "SMTP",
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: BREVO_SMTP_USER,
      pass: BREVO_SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: BREVO_SMTP_USER, // Sender address
    to: ALERT_EMAIL, // Receiver email
    subject: "🚨 Supabase Database Space Warning",
    text: `Warning: Database usage is ${used.toFixed(2)} MB. Only ${available.toFixed(2)} MB left.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
