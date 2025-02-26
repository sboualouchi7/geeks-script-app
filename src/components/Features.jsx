import React from 'react';

const Features = () => {
  return (
    <section id="features" style={styles.features}>
      <h2 style={styles.featuresTitle}>Pourquoi choisir notre plateforme ?</h2>
      <div style={styles.featuresList}>
        <div style={styles.feature}>
          <h3>Facile à utiliser</h3>
          <p>Une interface intuitive pour publier vos blogs en quelques clics.</p>
        </div>
        <div style={styles.feature}>
          <h3>Gratuit</h3>
          <p>Profitez de toutes les fonctionnalités sans aucun coût.</p>
        </div>
        <div style={styles.feature}>
          <h3>Communauté active</h3>
          <p>Échangez avec dautres passionnés de blogs.</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  features: {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  featuresTitle: {
    fontSize: '2rem',
    marginBottom: '40px',
  },
  featuresList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  feature: {
    width: '30%',
    margin: '10px',
  },
};

export default Features;