"use client";

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../config/firebaseConfig"; // Ajusta la ruta según la ubicación de firebaseConfig.ts

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    try {
      setError(null); // Limpia cualquier error previo
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario autenticado exitosamente');
      // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      setError('Correo o contraseña incorrectos');
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ingresa tus datos para que tu vida sin humo comience hoy</h2>
      <div style={styles.inputContainer}>
        <input 
          type="email" 
          placeholder="Correo electrónico..." 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={styles.input}
        />
        <input 
          type="password" 
          placeholder="Contraseña..." 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={styles.input}
        />
      </div>
      {error && <p style={styles.error}>{error}</p>}
      <a href="#" style={styles.forgotPassword}>Olvidé mi contraseña</a>
      <button onClick={handleLogin} style={styles.loginButton}>INICIAR SESIÓN</button>
    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#d9d9d9',
    color: '#333',
  },
  title: {
    marginBottom: '20px',
    fontSize: '18px',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
  },
  forgotPassword: {
    fontSize: '12px',
    color: '#333',
    textDecoration: 'none',
    marginBottom: '20px',
  },
  loginButton: {
    padding: '15px 30px',
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  }
};

export default Login;
