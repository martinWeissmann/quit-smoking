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
    questionContainer: {
      display: 'flex',
      alignItems: 'center', // Aligns the question text with the checkboxes
      marginTop: '30px',
    } as React.CSSProperties,
    questionText: {
      fontSize: '18px',
      color: '#f49034',
      marginRight: '20px', // Adds space between the question text and the checkboxes
      width: '50%', // Ensures consistent width for the question text
    } as React.CSSProperties,
    options: {
      display: 'flex',
      justifyContent: 'flex-start', // Align items to the left
      marginLeft: '160px', // Adds space between the question text and the checkboxes

    } as React.CSSProperties,
    option: {
      display: 'flex',
      flexDirection: 'column', // Align label above checkbox
      alignItems: 'center',
      marginLeft: '20px',
    } as React.CSSProperties,
    checkbox: {
      width: '53px',  // Set width of checkbox
      height: '52px', // Set height of checkbox
      cursor: 'pointer',
      appearance: 'none', // Remove default styling of input
      backgroundColor: '#fff',
      border: '2px solid #f49034',
      borderRadius: '4px', // Optional: slightly rounded corners
      display: 'inline-block',
      position: 'relative',
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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Preguntas de seguimiento básicas</h1>
      <img src="/OS.png" style={styles.image} />
      <img src="/vector.png" style={styles.vector} />
      <img src="/imagen.png" style={styles.imagen} />

      <div style={styles.questionContainer}>
        <div style={styles.questionText}>1. ¿Fumaste?</div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>Si</label>
            <input type="radio" name="fumaste" style={styles.checkbox} />
          </div>
          <div style={styles.option}>
            <label>No</label>
            <input type="radio" name="fumaste" style={styles.checkbox} />
          </div>
        </div>
      </div>

      <div style={styles.questionContainer}>
        <div style={styles.questionText}>2. ¿Sentís menos ansiedad o estrés?</div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>Si</label>
            <input type="radio" name="ansiedad" style={styles.checkbox} />
          </div>
          <div style={styles.option}>
            <label>No</label>
            <input type="radio" name="ansiedad" style={styles.checkbox} />
          </div>
        </div>
      </div>

      <div style={styles.questionContainer}>
        <div style={styles.questionText}>3. ¿Te sentiste inquieto?</div>
        <div style={styles.options}>
          <div style={styles.option}>
            <label>Si</label>
            <input type="radio" name="inquieto" style={styles.checkbox} />
          </div>
          <div style={styles.option}>
            <label>No</label>
            <input type="radio" name="inquieto" style={styles.checkbox} />
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
