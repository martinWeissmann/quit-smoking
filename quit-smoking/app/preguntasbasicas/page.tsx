'use client'; // Añade esta línea para convertirlo en un Client Component

import React, { useState } from 'react';

const Preguntas: React.FC = () => {
  const [cigarrillosHoy, setCigarrillosHoy] = useState('');

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#f49034',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      marginLeft: 'auto',
      marginRight: '250px',
      width: '60%',
      textAlign: 'left',
    } as React.CSSProperties,
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#f49034',
    } as React.CSSProperties,
    questionContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '30px',
    } as React.CSSProperties,
    questionText: {
      fontSize: '18px',
      color: '#f49034',
      marginRight: '20px',
      width: '50%',
    } as React.CSSProperties,
    options: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: '160px',
    } as React.CSSProperties,
    option: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '20px',
    } as React.CSSProperties,
    checkbox: {
      width: '53px',
      height: '52px',
      cursor: 'pointer',
      backgroundColor: '#fff',
      border: '2px solid #f49034',
      borderRadius: '4px',
      display: 'inline-block',
      position: 'relative',
    } as React.CSSProperties,
    input: {
      width: '50px',
      height: '30px',
      textAlign: 'center',
      marginLeft: '20px',
      border: '2px solid #f49034',
      borderRadius: '4px',
      color: '#f49034',
      backgroundColor: '#fff',
    } as React.CSSProperties,
    buttonContainer: {
      textAlign: 'center',
      marginTop: '20px',
    } as React.CSSProperties,
    button: {
      backgroundColor: '#f49034',
      color: '#fff',
      padding: '10px 50px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    } as React.CSSProperties,
    image: {
      margin: '20px auto',
      maxWidth: '100%',
      height: 'auto',
      paddingLeft: '900px',
      marginTop: '-200px',
    } as React.CSSProperties,
    vector: {
      position: 'absolute',
      margin: '20px auto',
      maxWidth: '100%',
      height: 'auto',
      paddingLeft: '900px',
      right: '1050px',
      bottom: '520px',
      marginTop: '-200px',
    } as React.CSSProperties,
    imagen: {
      position: 'absolute',
      margin: '20px auto',
      maxWidth: '100%',
      width: '150px',
      height: 'auto',
      paddingLeft: '900px',
      right: '0px',
      bottom: '0px',
      top: '270px',
    } as React.CSSProperties,
    backArrow: {
      cursor: 'pointer',
      position: 'absolute',
      top: '20px',
      left: '20px',
      fontSize: '44px',
      color: '#f49034',
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

      <h1 style={styles.title}>Preguntas de seguimiento básicas</h1>
      <img src="/OS.png" style={styles.image} />
      <img src="/vector.png" style={styles.vector} />
      <img src="/imagen.png" style={styles.imagen} />

      <div style={styles.questionContainer}>
        <div style={styles.questionText}>1. ¿Fumaste?</div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>Si</label>
            <input
              type="radio"
              name="fumaste"
              value="si"
              style={styles.checkbox}
            />
          </div>
          <div style={styles.option}>
            <label>No</label>
            <input
              type="radio"
              name="fumaste"
              value="no"
              style={styles.checkbox}
            />
          </div>
        </div>
      </div>

      <div style={styles.questionContainer}>
        <div style={styles.questionText}>2. ¿Sentís menos ansiedad o estrés?</div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>Si</label>
            <input
              type="radio"
              name="ansiedad"
              value="si"
              style={styles.checkbox}
            />
          </div>
          <div style={styles.option}>
            <label>No</label>
            <input
              type="radio"
              name="ansiedad"
              value="no"
              style={styles.checkbox}
            />
          </div>
        </div>
      </div>

      <div style={styles.questionContainer}>
        <div style={styles.questionText}>3. ¿Te sentiste inquieto?</div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>Si</label>
            <input
              type="radio"
              name="inquieto"
              value="si"
              style={styles.checkbox}
            />
          </div>
          <div style={styles.option}>
            <label>No</label>
            <input
              type="radio"
              name="inquieto"
              value="no"
              style={styles.checkbox}
            />
          </div>
        </div>
      </div>

      {/* Nueva pregunta para cuántas veces fumó hoy */}
     

      <div style={styles.buttonContainer}>
        <button style={styles.button}>Enviar</button>
      </div>
    </div>
  );
};

export default Preguntas;
