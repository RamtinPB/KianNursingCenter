import { serve } from "https://cdn.jsdelivr.net/gh/denoland/deno_std/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

// Environment variables
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ALERT_EMAIL = Deno.env.get("ALERT_EMAIL")!;
const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY")!;

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
  const emailData = {
    personalizations: [{ to: [{ email: ALERT_EMAIL }] }], // Replace with your email
    from: { email: "your-email@example.com" }, // Replace with your email
    subject: "🚨 Supabase Database Space Warning",
    content: [
      {
        type: "text/plain",
        value: `Warning: Database usage is ${used.toFixed(2)} MB. Only ${available.toFixed(2)} MB left.`,
      },
    ],
  };

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  });

  console.log("Email sent:", response.ok);
}
