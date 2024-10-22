"use client"; // Esto marca el archivo como un componente del cliente

import React from 'react';

const App = () => {
  // Función para regresar a la página anterior
  const goBack = () => {
    window.history.back();
  };

  const handleNavigation = (url: string) => {
    window.location.href = url; // Navegar a la URL especificada
  };

  return (
    <div style={styles.container}>
      {/* Flecha de regreso en la esquina superior izquierda */}
      <span style={styles.backArrow} onClick={goBack}>
        ← 
      </span>

      <img
        src="/vector.png"
        alt="decoracion-izquierda"
        style={styles.sideImageLeft}
      />
      <img
        src="/imagen.png"
        alt="decoracion-derecha"
        style={styles.sideImageRight}
      />
      
      <div style={styles.logo}>
        <img src="/OS.png" alt="logo qs" style={styles.logoImage} />
      </div>
      
      <button style={styles.loginBtn} onClick={() => handleNavigation("http://localhost:3000/login")}>
        Iniciar sesión
      </button>
      <button style={styles.registerBtn} 
      onClick={() => handleNavigation("http://localhost:3000/register")}>
        Registrarme
      </button>
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
    position: 'relative',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  backArrow: {
    fontSize: '24px',
    cursor: 'pointer',
    position: 'absolute', // Posiciona la flecha de manera absoluta
    top: '20px', // Espaciado desde la parte superior
    left: '20px', // Espaciado desde la izquierda
    zIndex: 10, // Asegura que la flecha esté por encima de otros elementos
  },
  sideImageLeft: {
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
    width: '160px',
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
