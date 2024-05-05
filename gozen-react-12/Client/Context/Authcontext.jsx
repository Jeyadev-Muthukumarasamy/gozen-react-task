import React, { createContext, useState } from 'react';
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      // Assuming the response contains authentication data
      console.log(response);
      if (response.status === 200) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
      setIsAuthenticated(false);
    }
  };
  console.log(isAuthenticated)

  const logout = () => {
    setIsAuthenticated(false);
  };

  const setCredentials = (uname, pwd) => {
    setUsername(uname);
    setPassword(pwd);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, password, login, logout, setCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};
