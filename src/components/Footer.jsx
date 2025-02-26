import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>© 2025 geeks-script. Tous droits réservés.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
  },
  footerText: {
    margin: '0',
  },
};

export default Footer;