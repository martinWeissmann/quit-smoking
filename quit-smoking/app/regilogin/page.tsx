"use client"; // Esto marca el archivo como un componente del cliente

import React from 'react';

// Define los estilos con el tipo correcto
const styles: { [key: string]: React.CSSProperties } = {
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
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '44px',
    color: '#f49034',
    background: 'none', // Sin fondo
    border: 'none', // Sin borde
    padding: 0, // Sin padding
},
  sideImageLeft: {
    position: 'absolute',
    top: '44px',
    left: '20px',
    width: '150px',

  },
  sideImageRight: {
    position: 'absolute',
    maxWidth: '100%',
    width: '150px',
    height: 'auto',
    right: '0px',
    top: '270px',
  },
  logo: {
    marginBottom: '20px',
  },
  logoImage: {
    width: '160px',
  },
  loginBtn: {
    width: '240px',
    padding: '15px',
    fontSize: '18px',
    margin: '10px 0',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#f68b1f',
    color: 'black',
  },
  registerBtn: {
    width: '240px',
    padding: '15px',
    fontSize: '18px',
    margin: '10px 0',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'black',
    color: '#f68b1f',
  }
};

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

export default App;
