import { useState } from 'react';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.jwt);
        return data.user;
      } else {
        throw new Error(data.error.message || 'Erro ao logar');
      }
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};
