'use client';

import styles from './login.module.css';
import Image from 'next/image';
import { useAuth } from '../../contexts/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const {login, loading} = useAuth();
  const router = useRouter();

  const hTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if(!email.trim()) newErorrs.email = 'Por favor, digite o email.';
    if(!password.trim()) newErrors.password = 'Por favor, digite a senha.';

    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try{
      await login(email, password);
      router.push('/main')
    } catch (err) {
      setErrors({password:'Usuário ou senha inválidos'});
    }
  };

  return (
    <div className={styles.mainContainer}>
        <div className={styles.logo}> 
          <Image
            src="/logo.png"
            alt="Logo"
            width={230}
            height={30}
          />
        </div>

        <form onSubmit={handleSubmit} style={{width: '100%'}}>
          <div className={style.formSection}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <div className={styles.inputWrapper}>
              <input 
                type="email" 
                id="email"
                placeholder="nome@email.com" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={styles.icon}>
                <Image
                  src="/mail.png"
                  alt="Ícone de e-mail"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}

            <label htmlFor="password" className={styles.label}>Password</label>
            <div className={styles.inputWrapper}>
              <input 
                type={showPassword ? 'text' : 'password'}
                id="password" 
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={styles.icon}>
                <Image
                  src="/lock.png"
                  alt="Ícone de cadeado"
                  width={20}
                  height={20}
                />
              </span>
            </div>
            {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
          </div>

          <div className={styles.checkbox}>
            <input 
              type="checkbox" 
              id="showPassword"
              checked={showPassword}
              onChange={hTogglePassword} 
            />
            <label htmlFor="showPassword" className={styles.labelCheck}>Mostrar a senha.</label>
          </div>

          <p className={styles.forgot}>Problemas para acessar sua conta?</p>

          <button className={styles.loginButton} type="submit" disabled={loading}>{loading ? 'Acessando...': 'Acessar'}</button>
        </form>

        <div className={styles.divider}><span>ou</span></div>

        <button 
          className={styles.registerButton}
          type="button"
          disabled={loading}
          onClick={() => alert('Cadastro ainda não disponível')}
        >Cadastrar</button>
        <div className={styles.terms}>
          <a href="#">Termos de uso</a> • <a href="#">Política de privacidade</a>
        </div>
      </div>
  );
}

export default Login;