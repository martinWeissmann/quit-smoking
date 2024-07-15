import React from 'react';

const Preguntas: React.FC = () => {
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
    question: {
      fontSize: '18px',
      color: '#f49034',
      margin: '10px 0',
    } as React.CSSProperties,
    options: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '10px',
    } as React.CSSProperties,
    option: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '20px',
    } as React.CSSProperties,
    checkbox: {
      marginLeft: '5px',
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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Preguntas de seguimiento básicas</h1>
      <div style={styles.question}>
        1. ¿Fumaste?
        <div style={styles.options}>
          <div style={styles.option}>
            <label>Si</label>
            <input type="checkbox" style={styles.checkbox} />
          </div>
          <div style={styles.option}>
            <label>No</label>
            <input type="checkbox" style={styles.checkbox} />
          </div>
        </div>
      </div>
      <div style={styles.question}>
        2. ¿Sentís menos ansiedad o estrés?
        <div style={styles.options}>
          <div style={styles.option}>
            <label>Si</label>
            <input type="checkbox" style={styles.checkbox} />
          </div>
          <div style={styles.option}>
            <label>No</label>
            <input type="checkbox" style={styles.checkbox} />
          </div>
        </div>
      </div>
      <div style={styles.question}>
        3. ¿Te sentiste inquieto?
        <div style={styles.options}>
          <div style={styles.option}>
            <label>Si</label>
            <input type="checkbox" style={styles.checkbox} />
          </div>
          <div style={styles.option}>
            <label>No</label>
            <input type="checkbox" style={styles.checkbox} />
          </div>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Enviar</button>
      </div>
    </div>
  );
};

export default Preguntas;
