import React, { useState } from 'react';
import blog3Image from '../img/blog3.jpg';
import blog4Image from '../img/blog4.jpg';
import blog5Image from '../img/blog5.jpeg';

const HeroSection = () => {
  // Fonction pour récupérer l'état des blogs depuis localStorage
  const getStoredBlogs = () => {
    const savedBlogs = localStorage.getItem('blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : [
      {
        id: 1,
        title: 'Apprendre React',
        description: 'Découvrez les bases de React pour créer des applications dynamiques.',
        image: blog5Image,
        liked: false,
      },
      {
        id: 2,
        title: 'La programmation Web',
        description: 'Les meilleures pratiques pour créer des sites web modernes.',
        image: blog4Image,
        liked: false,
      },
      {
        id: 3,
        title: 'Les outils de développement',
        description: 'Les outils essentiels pour un développement web efficace.',
        image: blog3Image,
        liked: false,
      },
    ];
  };

  // Initialisation de l'état avec les blogs stockés
  const [blogs, setBlogs] = useState(getStoredBlogs);

  // Fonction pour gérer le clic sur "J'aime"
  const toggleLike = (id) => {
    const updatedBlogs = blogs.map(blog =>
      blog.id === id ? { ...blog, liked: !blog.liked } : blog
    );
    setBlogs(updatedBlogs);

    // Sauvegarder l'état mis à jour dans localStorage
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  // Image par défaut au cas où l'image du blog est vide
  const defaultImage = 'https://via.placeholder.com/600x300?text=Default+Image';

  return (
    <section style={styles.hero}>
      <h1 style={styles.heroTitle}>Partagez vos idées avec le monde</h1>
      <p style={styles.heroSubtitle}>
        Rejoignez notre plateforme et commencez à publier vos blogs dès aujourd hui.
      </p>
      <button style={styles.heroButton}>Commencer</button>

      {/* Affichage des blogs */}
      <div style={styles.blogContainer}>
        {blogs.map(blog => (
          <div key={blog.id} style={styles.blogCard}>
            {/* Si l'image est vide, afficher l'image par défaut */}
            <img
              src={blog.image || defaultImage}
              alt={blog.title}
              style={styles.blogImage}
            />
            <h2 style={styles.blogTitle}>{blog.title}</h2>
            <p style={styles.blogDescription}>{blog.description}</p>
            
            {/* Bouton J'aime */}
            <button 
              onClick={() => toggleLike(blog.id)}
              style={{
                ...styles.likeButton, 
                backgroundColor: blog.liked ? '#FF6347' : '#ccc' // Change la couleur si J'aime est activé
              }}
            >
              {blog.liked ? 'Vous aimez ce blog' : 'J\'aime'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// Styles avec animations améliorées
const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '700px',
    backgroundColor: '#FFA500', // Orange clair
    color: 'white',
    textAlign: 'center',
    padding: '40px',
    borderBottom: '5px solid #FF8C00', // Bordure inférieure pour accentuer l'orange
    animation: 'fadeIn 2s ease-out', // Animation d'apparition de la section entière
  },
  heroTitle: {
    fontSize: '3rem',
    margin: '0',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Ombre pour plus de lisibilité
    animation: 'slideInFromLeft 1s ease-out', // Animation pour l'apparition du titre
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    margin: '20px 0',
    maxWidth: '700px',
    animation: 'fadeIn 2s ease-out', // Animation pour le sous-titre
  },
  heroButton: {
    padding: '12px 25px',
    fontSize: '1.1rem',
    backgroundColor: '#FF8C00', // Orange plus foncé
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Transition ajoutée pour le bouton
    animation: 'bounceIn 1s ease-out', // Animation d'apparition du bouton
  },
  blogContainer: {
    marginTop: '40px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap', // Permet aux cartes de s'ajuster sur plusieurs lignes
    justifyContent: 'center', // Aligne les cartes au centre
    animation: 'fadeIn 2s ease-out', // Animation de l'apparition des cartes de blog
  },
  blogCard: {
    backgroundColor: '#ffffff',
    color: '#333333',
    padding: '20px',
    margin: '15px',
    borderRadius: '8px',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
    width: '300px', // Définit une largeur fixe pour chaque carte
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease', // Effet de zoom et ombre au survol
    animation: 'slideUp 1s ease-out', // Animation de l'apparition des cartes
  },
  blogImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover', // L'image remplira l'espace sans distorsion
    borderRadius: '8px',
    marginBottom: '15px',
  },
  blogTitle: {
    fontSize: '1.8rem',
    margin: '0',
    fontWeight: 'bold',
    animation: 'fadeInFromLeft 1s ease-out', // Animation pour les titres des blogs
  },
  blogDescription: {
    fontSize: '1rem',
    color: '#555',
    animation: 'fadeInFromBottom 1s ease-out', // Animation pour la description des blogs
  },
  likeButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Effet de transition pour le bouton
  },
};

const keyframes = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInFromLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes bounceIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInFromBottom {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${keyframes}</style>`);

export default HeroSection;
