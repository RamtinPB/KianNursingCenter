// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAdministrator: boolean;
  setAuthData: (isAdmin?: boolean | undefined) => void;
  loginState: boolean;
  setLoginState: (state: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAdministrator, setIsAdministrator] = useState(
    () => localStorage.getItem("isAdministrator") === "true",
  );
  const [loginState, setLoginState] = useState(
    () => localStorage.getItem("loginState") === "true",
  );

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem("isAdministrator") === "true";
    const storedLoginState = localStorage.getItem("loginState") === "true";

    setIsAdministrator(storedIsAdmin);
    setLoginState(storedLoginState);
  }, []);

  const setAuthData = (isAdmin: boolean | undefined) => {
    if (isAdmin === undefined) {
      setIsAdministrator(false);
      localStorage.removeItem("isAdministrator");
      setLoginState(false); // Set login state to false on logout
      localStorage.removeItem("loginState");
    } else {
      setIsAdministrator(isAdmin);
      localStorage.setItem("isAdministrator", String(isAdmin));
      setLoginState(true); // Set login state to true on login
      localStorage.setItem("loginState", "true");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAdministrator,
        setAuthData,
        loginState,
        setLoginState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
