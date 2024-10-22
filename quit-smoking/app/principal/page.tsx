"use client";

import React from "react";

const App: React.FC = () => {
  // Function to handle navigation
  const handleNavigation = (url: string) => {
    window.location.href = url; // Navigate to the specified URL
  };

  // Function to go back to the previous page
  const goBack = () => {
    window.history.back();
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <img src="/vector.png" style={styles.vector} />
          <img src="/qs.png" style={styles.image} />
        </div>
        <div style={styles.icons}>
          <div style={styles.icon}>
            {/* Each image has a unique onClick event handler */}
            <img
              src="/calendario.png"
              alt="Calendario"
              style={styles.iconImage}
              onClick={() => handleNavigation("http://localhost:3000/")}
            />
            <p style={styles.iconText}>Calendario</p>
          </div>
          <div style={styles.icon}>
            <img
              src="/consejos.png"
              alt="Consejos"
              style={styles.iconImage}
              onClick={() => handleNavigation("/consejos")}
            />
            <p style={styles.iconText}>Consejos</p>
          </div>
          <div style={styles.icon}>
            <img
              src="/medicos.png"
              alt="Medicos"
              style={styles.iconImage}
              onClick={() => handleNavigation("/medicos")}
            />
            <p style={styles.iconText}>Medicos</p>
          </div>
          <div style={styles.icon}>
            <img
              src="/premios.png"
              alt="Premios"
              style={styles.iconImage}
              onClick={() => handleNavigation("/premios")}
            />
            <p style={styles.iconText}>Premios</p>
          </div>
        </div>
      </header>
      
      {/* Flecha de regreso */}
      <span
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "44px",
          color: "#f49034",
          background: "none", // Sin fondo
          border: "none", // Sin borde
          padding: 0, // Sin padding
        }}
        onClick={goBack}
      >
        ←
      </span>

      <img
        src="/ppa.png"
        style={styles.ppa}
        onClick={() => handleNavigation("/regilogin")}
      />
    </div>
  );
};

const styles = {
  app: {
    textAlign: "center" as "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "40px",
  },
  image: {
    margin: "20px auto",
    maxWidth: "100%",
    height: "auto",
    marginLeft: "170px",
    width: "380px",
  } as React.CSSProperties,
  vector: {
    position: "absolute",
    margin: "20px auto",
    maxWidth: "100%",
    height: "auto",
    right: "1162px",
    bottom: "520px",
    marginTop: "-200px",
  } as React.CSSProperties,
  icons: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    maxWidth: "800px",
  },
  icon: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
  },
  iconImage: {
    width: "130px",
    height: "180px",
    marginBottom: "10px",
    cursor: "pointer", // Make it look clickable
  },
  iconText: {
    fontSize: "18px",
    fontWeight: "bold" as "bold",
    color: "#000000", // Color negro
  },
  ppa: {
    marginTop: "153px",
    marginLeft: "1100px",
    cursor: "pointer", // Make it look clickable
  },
};

export default App;
