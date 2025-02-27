import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirige si pas connecté
    } else {
      fetchBlogs();
    }
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des blogs", err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Dashboard - Blogs</h2>
      <button onClick={() => navigate("/new-blog")} style={styles.button}>Créer un blog</button>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} style={styles.blog}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button style={styles.editButton}>Modifier</button>
            <button style={styles.deleteButton}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  button: {
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "#ff7e5f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  blog: {
    borderBottom: "1px solid #ccc",
    padding: "10px",
    textAlign: "left",
  },
  editButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "5px",
    marginRight: "5px",
    border: "none",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default Dashboard;
