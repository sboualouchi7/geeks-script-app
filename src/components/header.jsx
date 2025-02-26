import React from 'react';

const Header = ({setItemId}) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Mon Blog Platform</h1>
      <nav>
        <a href="#features" style={styles.navLink}>Fonctionnalités</a>
        <a href="#cta" style={styles.navLink}>Commencer</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white',
  },
  title: {
    margin: '0',
    fontSize: '1.5rem',
  },
  navLink: {
    color: 'white',
    marginLeft: '20px',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Header;