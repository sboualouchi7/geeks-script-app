import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        ...styles.header,
        backgroundColor: isTransparent ? "rgba(26, 26, 26, 0.5)" : "#1a1a1a",
      }}
    >
      <h1 style={styles.title}>GeekScript</h1>
      <div style={styles.buttonsContainer}>
        <button style={styles.button} onClick={() => navigate("/login")}>
          Login
        </button>
        <button
          style={{ ...styles.button, ...styles.primaryButton }}
          onClick={() => navigate("/create-blog")}
        >
          Poste un blog
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    color: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "background-color 0.3s ease-in-out",
  },
  title: {
    margin: "0",
    fontSize: "1.8rem",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  buttonsContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "500",
    color: "white",
    backgroundColor: "transparent",
    border: "2px solid #ff7e5f",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  primaryButton: {
    backgroundColor: "#ff7e5f",
    border: "none",
  },
};

export default Header;
