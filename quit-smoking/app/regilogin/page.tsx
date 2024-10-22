import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <img src="/vector.png" alt="decoracion-izquierda" style={styles.sideImageLeft} />
      <img src="/imagen.png" alt="decoracion-derecha" style={styles.sideImageRight} />
      
      <div style={styles.logo}>
        <img src="/OS.png" alt="qs logo" style={styles.logoImage} />
      </div>
      <button style={styles.loginBtn}>Iniciar sesión</button>
      <button style={styles.registerBtn}>Registrarme</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',  // Necesario para las imágenes en los costados
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  sideImageLeft: {
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '44px',
    color: '#f49034',

  },
  sideImageRight: {
    position: 'absolute',
    margin: '20px auto',
    maxWidth: '100%',
    width: '150px',
    height: 'auto',
    paddingLeft: '900px',
    right: '0px',
    bottom: '0px',
    top: '270px',

  },
  logo: {
    marginBottom: '20px',
  },
  logoImage: {
    width: '100px', // Puedes ajustar el tamaño del logo según lo necesites
  },
  loginBtn: {
    width: '200px',
    padding: '15px',
    fontSize: '18px',
    margin: '10px 0',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#f68b1f',
    color: 'black',
  },
  registerBtn: {
    width: '200px',
    padding: '15px',
    fontSize: '18px',
    margin: '10px 0',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'black',
    color: '#f68b1f',
  }
};

export default App;
