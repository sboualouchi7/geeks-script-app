import React, { useState } from 'react';

const Features = () => {
  return (
    <section id="features" style={styles.features}>
      <h2 style={styles.featuresTitle}>Pourquoi choisir notre plateforme ?</h2>
      <div style={styles.featuresList}>
        {featureData.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ ...styles.feature, ...(isHovered ? styles.featureHover : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
};

const featureData = [
  { icon: "📌", title: "Facile à utiliser", description: "Une interface intuitive pour publier vos blogs en quelques clics." },
  { icon: "💰", title: "Gratuit", description: "Profitez de toutes les fonctionnalités sans aucun coût." },
  { icon: "🌍", title: "Communauté active", description: "Échangez avec d'autres passionnés de blogs." }
];

const styles = {
  features: {
    padding: '60px 20px',
    backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,blog')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  featuresTitle: {
    fontSize: '2rem',
    marginBottom: '40px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  featuresList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  feature: {
    width: '30%',
    minWidth: '250px',
    padding: '20px',
    background: 'rgba(249, 137, 109, 0.83)',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  },
  featureHover: {
    transform: 'scale(1.05)',
  },
};

export default Features;
