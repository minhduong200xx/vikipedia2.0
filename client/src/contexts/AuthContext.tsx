import axios from "axios";
import { User } from "../types/types";
// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// Define the types
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}
// Create the contextconst
const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Initialize user from sessionStorage if available
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const login = (email: string, password: string) => {
    const data = JSON.stringify({
      email: email,
      password: password,
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem("user", JSON.stringify(response.data));
          setUser(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logout = () => {
    sessionStorage.setItem("user", "");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
