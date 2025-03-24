import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { signInUser, logoutUser, checkEmailConfirmation } from "../utils/auth";
import { User } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase"; // Ensure you import the Supabase client

interface AuthContextType {
  user: User | null;
  loading: boolean;
  emailConfirmation: () => Promise<boolean>;
  signIn: (email: string, password: string) => Promise<User | null | undefined>;
  signUp: (email: string, password: string) => Promise<User | null | undefined>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      // Fetch the session and user when the component first mounts
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // If there's an active session and user data, set the user
      if (session?.user) {
        setUser(session.user); // Set the user directly from the session
      } else {
        setUser(null); // No session, set user to null
      }

      setLoading(false); // Done loading after checking session
    };

    // Call the function to fetch the user initially
    fetchUser();

    // Listen for auth state changes (login, logout, etc.)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(session.user); // Update user on session change (login)
        } else {
          setUser(null); // Reset user on logout or session expiration
        }
      },
    );

    // Cleanup the auth listener when the component unmounts
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const signIn = async (email: string, password: string) => {
    const response = await signInUser(email, password);
    if (response.success) setUser(response.user ?? null);
    return response.user;
  };

  // SignUp function
  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      // Optionally, handle the user after successful sign up (e.g., redirect to login page)
      setUser(data?.user ?? null);
      return data.user;
    } catch (error) {
      console.error("Sign up error:", error);
      // Optionally, handle error (e.g., show a notification)
    }
  };

  const signOut = async () => {
    await logoutUser();
    setUser(null);
  };

  const emailConfirmation = async () => {
    const result = await checkEmailConfirmation();
    return result;
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, emailConfirmation, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
