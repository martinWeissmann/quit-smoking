'use client'; // Añade esta línea para convertirlo en un Client Component

import React from "react";

const Awards: React.FC = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      position: "relative", // Para posicionar el logo correctamente
    } as React.CSSProperties,
    logo: {
      position: "absolute",
      top: "4rem",
      left: "1rem",
      width: "50px",
      height: "50px",
      objectFit: "contain",
    } as React.CSSProperties,
    backArrow: {
      cursor: "pointer",
      position: "absolute",
      top: "20px",
      left: "20px",
      fontSize: "44px",
      color: "#f48325",
    } as React.CSSProperties,
    header: {
      marginBottom: "2rem",
    } as React.CSSProperties,
    trophy: {
      width: "80px",
      height: "auto",
      marginBottom: "1rem",
    } as React.CSSProperties,
    title: {
      fontSize: "2.5rem",
      color: "#f48325",
    } as React.CSSProperties,
    description: {
      fontSize: "1rem",
      color: "#333",
      maxWidth: "600px",
      margin: "0 auto",
    } as React.CSSProperties,
    cardsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      flexWrap: "wrap",
    } as React.CSSProperties,
    card: {
      border: "2px solid #f48325",
      borderRadius: "8px",
      padding: "1rem",
      width: "250px",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    } as React.CSSProperties,
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "1rem",
    } as React.CSSProperties,
    name: {
      fontSize: "1.5rem",
      color: "#f48325",
      marginBottom: "0.5rem",
    } as React.CSSProperties,
    percentage: {
      fontSize: "1rem",
      color: "#333",
    } as React.CSSProperties,
  };

  // Función para regresar a la página anterior
  const goBack = () => {
    window.history.back();
  };

  return (
    <div style={styles.container}>
      {/* Flecha de regreso */}
      <span style={styles.backArrow} onClick={goBack}>
        ←
      </span>

    

      <header style={styles.header}>
        {/* Copa encima del título */}
        <img src="/premios.png" alt="Trophy" style={styles.trophy} />
        <h1 style={styles.title}>Premios</h1>
        <p style={styles.description}>
          Cada mes mostraremos las estadísticas de los usuarios que más avanzaron
          en el proceso para demostrar que nuestro servicio te puede ayudar a que
          tu vida sin humo comience hoy.
        </p>
      </header>
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <img
            src="/martinez.png"
            alt="Luis Martinez"
            style={styles.image}
          />
          <h2 style={styles.name}>Luis Martinez</h2>
          <p style={styles.percentage}>
            Redujo su porcentaje en un <strong>48%</strong>
          </p>
        </div>
        <div style={styles.card}>
          <img
            src="/nico.png"
            alt="Nicolás Fridman"
            style={styles.image}
          />
          <h2 style={styles.name}>Nicolás Fridman</h2>
          <p style={styles.percentage}>
            Redujo su porcentaje en un <strong>41%</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
