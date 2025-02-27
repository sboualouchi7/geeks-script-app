import React, { useState, useEffect } from 'react';
import blog3Image from '../img/blog3.jpg';
import blog4Image from '../img/blog4.jpg';
import blog5Image from '../img/blog5.jpeg';

const HeroSection = () => {
  // Charger les "likes" depuis LocalStorage ou initialiser
  const [blogs, setBlogs] = useState(() => {
    const savedLikes = localStorage.getItem('likedBlogs');
    return savedLikes
      ? JSON.parse(savedLikes)
      : [
          { id: 1, title: 'Apprendre React', description: 'Découvrez les bases de React. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium velit harum nobis reprehenderit delectus, amet optio rem nulla adipisci consequatur ad veritatis ab. Voluptatum, facere. Soluta voluptatibus necessitatibus eos?',
             image: blog5Image, liked: false },
          { id: 2, title: 'La programmation Web', description: 'Les meilleures pratiques pour le web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium velit harum nobis reprehenderit delectus, amet optio rem nulla adipisci consequatur ad veritatis ab. Voluptatum, facere. Soluta voluptatibus necessitatibus eos?', image: blog4Image, liked: false },
          { id: 3, title: 'Les outils de développement', description: 'Les outils essentiels. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium velit harum nobis reprehenderit delectus, amet optio rem nulla adipisci consequatur ad veritatis ab. Voluptatum, facere. Soluta voluptatibus necessitatibus eos?', image: blog3Image, liked: false },
        ];
       
  });

  // Mettre à jour LocalStorage quand les "likes" changent
  useEffect(() => {
    localStorage.setItem('likedBlogs', JSON.stringify(blogs));
  }, [blogs]);

  // Fonction pour gérer le "J'aime"
  const toggleLike = (id) => {
    setBlogs(blogs.map(blog => 
      blog.id === id ? { ...blog, liked: !blog.liked } : blog
    ));
  };

  return (
    <section style={styles.hero}>
      <h1 style={styles.heroTitle}>Partagez vos idées avec le monde</h1>
      <p style={styles.heroSubtitle}>
        Rejoignez notre plateforme et commencez à publier vos blogs dès aujourd hui.
      </p>
      <button style={styles.heroButton}>Commencer</button>

      <div style={styles.blogContainer}>
        {blogs.map(blog => (
          <div key={blog.id} style={styles.blogCard}>
            <img src={blog.image} alt={blog.title} style={styles.blogImage} />
            <h2 style={styles.blogTitle}>{blog.title}</h2>
            <p style={styles.blogDescription}>{blog.description}</p>
            
            {/* Bouton J'aime avec animation */}
            <button 
              onClick={() => toggleLike(blog.id)}
              className={`like-button ${blog.liked ? 'liked' : ''}`}
              style={{
                fontSize: '2rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
                transition: 'transform 0.2s ease-in-out',
              }}
            >
              {blog.liked ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>

      {/* Ajout des styles d'animation dans une balise <style> */}
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

// Styles principaux
const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '700px',
    background: 'linear-gradient(90deg,rgb(255, 158, 134), #feb47b)',

    // backgroundColor: '#FFA500',
    color: 'white',
    textAlign: 'center',
    padding: '40px',
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
  },
  blogCard: {
    backgroundColor: '#F2D2BD',
    // background: 'linear-gradient(90deg,rgb(250, 197, 164), #feb47b)',
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
  },
  blogImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  blogTitle: {
    fontSize: '1.8rem',
    margin: '0',
    fontWeight: 'bold',
  },
  blogDescription: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default HeroSection;
