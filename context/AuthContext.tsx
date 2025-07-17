import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

// Define the shape of the context
export type AuthContextType = {
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  // Example login function using Axios
  const login = async (username: string, password: string) => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post("/api/login", { username, password });
      setUser(response.data.username); // Adjust based on your API response
    } catch (error) {
      // Handle error (show message, etc.)
      setUser(null);
      throw error;
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
