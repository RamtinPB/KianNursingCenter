import { supabase } from "./supabase";

// Sign up a new user
export const signUpUser = async (email: string, password: string) => {
  email = email.toLowerCase().trim(); // Ensure case insensitivity

  if (!email || !password) {
    return { success: false, error: "Email and password are required" };
  }

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error("Error signing up:", error.message);
    return { success: false, error: error.message };
  }

  if (!data.user) {
    return { success: false, error: "User registration failed" };
  }

  return {
    success: true,
    user: data.user,
  };
};

// export const updateUserRole = async (
//   userId: string,
//   newRole: "admin" | "super_admin",
// ) => {
//   const { data: currentUser, error: userError } = await supabase.auth.getUser();

//   if (userError || !currentUser) {
//     return { success: false, error: "Unauthorized request" };
//   }

//   // Ensure only super_admins can update roles
//   const { data: adminCheck, error: roleError } = await supabase
//     .from("users")
//     .select("role")
//     .eq("id", currentUser.user.id)
//     .single();

//   if (roleError || adminCheck?.role !== "super_admin") {
//     return { success: false, error: "Permission denied" };
//   }

//   const { data, error } = await supabase
//     .from("users")
//     .update({ role: newRole })
//     .eq("id", userId);

//   if (error) {
//     console.error("Error updating role:", error.message);
//     return { success: false, error: error.message };
//   }

//   return { success: true, data };
// };

// Sign in an existing user
export const signInUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error signing in:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true, user: data.user };
};

// Logout user
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error signing out:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true };
};

export const checkEmailConfirmation = async () => {
  try {
    // Get the user information (this will only succeed if a session exists)
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.error("Error fetching user:", userError);
      return false; // User not found, or session missing
    }

    // Return true if email is confirmed
    return userData?.user?.email_confirmed_at !== null;
  } catch (err) {
    console.error("Error checking email confirmation:", err);
    return false;
  }
};

// Get the currently logged-in user's data from the public.users table
export const getCustomUserData = async () => {
  try {
    // First, get the authenticated user's ID
    const { data: authData, error: authError } = await supabase.auth.getUser();

    if (authError || !authData?.user) {
      console.error("Error fetching authenticated user:", authError?.message);
      return null; // Return null if authentication fails
    }

    const userId = authData.user.id;

    // Fetch the user data from the public.users table
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*") // Select all user fields, or specify fields like "id, role"
      .eq("id", userId)
      .single(); // Expecting a single row

    if (userError) {
      console.error(
        "Error fetching user data from users table:",
        userError.message,
      );
      return null;
    }

    return userData; // Return the full user object from public.users
  } catch (err) {
    console.error("Unexpected error fetching user:", err);
    return null;
  }
};

// Get all users (only for admin and super_admin)
export const getAllUsers = async () => {
  const { data, error } = await supabase
    .from("users")
    .select("id, email, role");

  if (error) {
    console.error("Error fetching users:", error.message);
    return { success: false, error: error.message };
  }

  return { success: true, users: data };
};
