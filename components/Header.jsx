import React from 'react'
import styles from "../styles/header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <h1>ORANGE</h1>
        </div>
        {/* <nav className={styles.menu}>
            <Link to={`/`}>FOODS</Link>
            <Link to={`/`}>PEOPLE</Link>
            <Link to={`/`}>PLACES</Link>
        </nav> */}
    </header>
    )
}
