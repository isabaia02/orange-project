'use client'
import React, { useEffect, useState } from 'react';
import styles from './cards.module.css';

const apiLoc = 'http://localhost:1337';

const Cards = ({ collection }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let loaderTimeout;

    const fetchCollection = async () => {
      setLoading (true);
      setShowLoader (false);
      setError(null);

      loaderTimeout = setTimeout(() => {
        setShowLoader(true);
      }, 5000);

      try {
        const res = await fetch(`${apiLoc}/${collection}`);
        if (!res.ok) throw new Error('Erro na resposta da API');
        const data = await res.json();
        setItems(data);
      } catch (err){
        setError('Erro ao carregar os dados! Tente novamente em alguns instantes.');
        console.error(err);
      } finally{
        setLoading(false);
        clearTimeout(loaderTimeout);
        setShowLoader(false);
      }
    };
    fetchCollection();
    return () => clearTimeout(loaderTimeout);
  }, [collection]);

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (loading && showLoader) {
    return <p className={styles.loading}>Carregando...</p>;
  }

  return(
    <>
    <div className={styles.dividerContainer}>
      <div className={styles.dividerLine}></div>
      <span className={styles.dividerText}>List of {collection}</span>
    </div>
    <div className={styles.cardContainer}>
      {items.map((item) => (
        <div key={item.id} className={styles.card}>
          {item.link && (
            <img
              src={`${apiLoc}${item.link.url}`}
              alt={item.name}
              className={styles.cardImage}
            />
          )}
          <h3 className={styles.cardTitle}>{item.name}</h3>
        </div>  
      ))}
    </div>
    </>
  );
}

export default Cards;