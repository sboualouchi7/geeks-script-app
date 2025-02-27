import React, { useState, useEffect } from 'react';
import blog3Image from '../img/blog3.jpg';
import blog4Image from '../img/blog4.jpg';
import blog5Image from '../img/blog5.jpeg';

const HeroSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Tableau d'images importées
  const blogImages = [blog5Image, blog4Image, blog3Image];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/blogs');
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log('Données reçues:', data);
        setBlogs(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des blogs:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const toggleLike = (id) => {
    setBlogs(blogs.map(blog =>
      blog.id === id ? { ...blog, liked: !blog.liked } : blog
    ));
  };

  if (loading) {
    return <div style={styles.loading}>Chargement en cours...</div>;
  }

  if (error) {
    return <div style={styles.error}>Erreur : {error}</div>;
  }

  return (
    <section style={styles.hero}>
      <h1 style={styles.heroTitle}>Partagez vos idées avec le monde</h1>
      <p style={styles.heroSubtitle}>
        Rejoignez notre plateforme et commencez à publier vos blogs dès aujourd'hui.
      </p>
      <button style={styles.heroButton}>Commencer</button>

      <div style={styles.blogContainer}>
        {blogs.map((blog, index) => (
          <div key={blog.id} style={styles.blogCard}>
            {/* Utilisez l'index pour sélectionner l'image correspondante */}
            <img src={blogImages[index % blogImages.length]} alt={blog.titre} style={styles.blogImage} />
            <h2 style={styles.blogTitle}>{blog.titre}</h2>
            <p style={styles.blogDescription}>{blog.description}</p>

            <button
              onClick={() => toggleLike(blog.id)}
              className={`like-button ${blog.liked ? 'liked' : ''}`}
              style={styles.likeButton}
            >
              {blog.liked ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>

      <style>
        {`
          .like-button.liked {
            transform: scale(1.3);
            transition: transform 0.2s ease-in-out;
          }

          .like-button {
            transition: transform 0.2s ease-in-out;
          }

          .like-button:active {
            transform: scale(0.9);
          }
        `}
      </style>
    </section>
  );
};

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '700px',
    background: 'linear-gradient(90deg,rgb(255, 158, 134), #feb47b)',
    color: 'white',
    textAlign: 'center',
    padding: '40px',
    paddingTop : '100px'
  },
  heroTitle: {
    fontSize: '3rem',
    margin: '0',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    margin: '20px 0',
    maxWidth: '700px',
  },
  heroButton: {
    padding: '12px 25px',
    fontSize: '1.1rem',
    backgroundColor: '#FF8C00',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  blogContainer: {
    marginTop: '40px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom:'60px'
  },
  blogCard: {
    backgroundColor: '#F2D2BD',
    color: '#333333',
    padding: '20px',
    margin: '15px',
    borderRadius: '8px',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
    width: '300px',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '400px', // Hauteur minimale pour éviter les chevauchements
  },
  blogImage: {
    width: '100%',
    height: '200px', // Taille fixe pour l'image
    objectFit: 'cover', // Pour que l'image couvre la zone sans déformation
    borderRadius: '8px',
    marginBottom: '15px', // Espace entre l'image et le titre
  },
  blogTitle: {
    fontSize: '1.8rem',
    margin: '0 0 10px 0', // Espace sous le titre
    fontWeight: 'bold',
    textAlign: 'center', // Centrer le titre
  },
  blogDescription: {
    fontSize: '1rem',
    color: '#555',
    textAlign: 'center', // Centrer la description
    flexGrow: 1, // Pour que la description prenne l'espace disponible
  },
  likeButton: {
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'transform 0.2s ease-in-out',
    marginTop: '10px', // Espace au-dessus du bouton
  },
  loading: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '50px',
  },
  error: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '50px',
    color: 'red',
  },
};

export default HeroSection;