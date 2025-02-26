import React from 'react';

const header = () => {
  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img
          src="https://via.placeholder.com/50" // Remplacez par l'URL de votre logo
          alt="Geeks-Script Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>Geeks-Script</h1>
      </div>

      {/* Boutons */}
      <div style={styles.buttonsContainer}>
        <button style={styles.button}>Login</button>
        <button style={{ ...styles.button, ...styles.primaryButton }}>
          Poste un blog
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#1a1a1a',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    width: '50px',
    height: '50px',
    borderRadius: '50%', // Pour un logo rond
  },
  title: {
    margin: '0',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  buttonsContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'white',
    backgroundColor: 'transparent',
    border: '2px solid #ff7e5f',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  primaryButton: {
    backgroundColor: '#ff7e5f',
    border: 'none',
  },
  buttonHover: {
    backgroundColor: '#ff7e5f',
    color: 'white',
  },
};

// Ajout d'un effet hover dynamique (optionnel)
const addHoverEffect = () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#ff7e5f';
      button.style.color = 'white';
    });
    button.addEventListener('mouseleave', () => {
      if (!button.classList.contains('primaryButton')) {
        button.style.backgroundColor = 'transparent';
        button.style.color = 'white';
      }
    });
  });
};

// Appliquer l'effet hover après le rendu du composant
setTimeout(addHoverEffect, 0);

export default header;