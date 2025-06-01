import { useState } from "react";
import Image from 'next/image';
import Cards from './Cards';
import styles from './main.modules.css';
import logo from '../public/logo.png';

const MainPage = () => {
    const [chooseCollection, setChooseCollection] = useState('foods');

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <Image
                        src={logo}
                        alt="Orange Logo"
                        width={200}
                        height={40}
                    />
                    <nav className={styles.navItems}>
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
                    </nav>
                </div>
            </header>

            <main>
                <Cards section={chooseCollection}/>
            </main>
        </>
    );
}

export default MainPage;