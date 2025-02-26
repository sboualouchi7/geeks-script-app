import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.heroTitle}>Partagez vos idées avec le monde</h1>
      <p style={styles.heroSubtitle}>
        Rejoignez notre plateforme et commencez à publier vos blogs dès aujourdhui.
      </p>
      <button style={styles.heroButton}>Contactez Nous !!</button>
    </section>
  );
};

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    backgroundColor: '#61dafb',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    margin: '0',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    margin: '20px 0',
  },
  heroButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#282c34',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default HeroSection;