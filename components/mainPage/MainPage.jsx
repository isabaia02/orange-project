'use client'
import { useState } from "react";
import Image from 'next/image';
import Cards from './Cards';
import styles from './mainPage.module.css';

const MainPage = () => {
    const [chooseCollection, setChooseCollection] = useState('foods');

    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                        <Image className={styles.logo}
                            src={'/logo.png'}
                            alt="Orange Logo"
                            width={230}
                            height={44}
                        />
                        <div className={styles.navItems}>
                            <button
                            onClick={() => setChooseCollection('foods')}
                            className={`${styles.navItem} ${chooseCollection === 'foods' ? styles.navItemActive : ''}`} 
                        >
                            FOODS
                        </button>
                        <button
                            onClick={() => setChooseCollection('people')}
                            className={`${styles.navItem} ${chooseCollection === 'people' ? styles.navItemActive : ''}`}
                        >
                            PEOPLE
                        </button>
                        <button
                            onClick={() => setChooseCollection('places')}
                            className={`${styles.navItem} ${chooseCollection === 'places' ? styles.navItemActive : ''}`}
                        >
                            PLACES
                        </button>
                        </div>
                </header>

                <main>
                    <Cards collection={chooseCollection}/>
                </main>
            </div>
        </>
    );
}

export default MainPage;