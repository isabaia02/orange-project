import styles from './login.module.css';
import Image from 'next/image';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <h1 className={styles.logo}>ORANGE</h1>

        <label>Email</label>
        <div className={styles.inputWrapper}>
          <input type="email" placeholder="seunome@email.com" />
          <span className={styles.icon}>📧</span>
        </div>

        <label>Password</label>
        <div className={styles.inputWrapper}>
          <input type="password" placeholder="Password" />
          <span className={styles.icon}>🔒</span>
        </div>

        <div className={styles.checkbox}>
          <input type="checkbox" id="showPassword" />
          <label htmlFor="showPassword">Mostrar a senha.</label>
        </div>

        <p className={styles.forgot}>Problemas para acessar sua conta?</p>

        <button className={styles.loginButton}>Acessar</button>

        <div className={styles.divider}><span>ou</span></div>

        <button className={styles.registerButton}>Cadastrar</button>
      </div>

      <div className={styles.imageSection}>
        <Image
          src="/bg.jpg"
          alt="Desk"
          width={860}
          height={444}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
}
