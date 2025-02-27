import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>© 2025 geeks-script. Tous droits réservés.</p>
        <nav style={styles.footerNav}>
          <a href="#" style={styles.footerLink}>Mentions légales</a>
          <a href="#" style={styles.footerLink}>Politique de confidentialité</a>
          <a href="#" style={styles.footerLink}>Contact</a>
        </nav>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1e1e1e',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: '40px',
    borderTop: '4px solid rgba(253, 107, 66, 0.92)',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerText: {
    marginBottom: '10px',
    fontSize: '1rem',
  },
  footerNav: {
    display: 'flex',
    gap: '15px',
  },
  footerLink: {
    color: '#F89880',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
  },
  footerLinkHover: {
    color: '#ffffff',
  },
};

export default Footer;
