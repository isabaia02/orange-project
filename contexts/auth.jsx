'use client'
import { useState, useContext, createContext } from 'react';

const AuthContext = createContext();

export function Auth ({children}) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:1337/auth/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.jwt);
        setToken(data.jwt);
        setUser(data.user);
        return data.user;
      } else {
        throw new Error(data.error.message || 'Erro ao logar');
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return(
    <AuthContext.Provider
      value={{
        user,
        token,
        loading, 
        login,
        logout,
        isAuthenticated: !!user,
      }}
    > 
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth precisa ser usado dentro de AuthProvider');
  }
  return context;
}