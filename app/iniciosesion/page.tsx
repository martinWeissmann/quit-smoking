"use client";

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (formData:FormData) => {
    const response = fetch("mateo server",  {
      body: formData
    })
    console.log('Iniciando sesión con:', email, password);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ingresa tus datos para que tu vida sin humo comience hoy</h2>
      <div style={styles.inputContainer}>
        <input 
          type="email" 
          placeholder="Correo electronico..." 
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
      <a href="#" style={styles.forgotPassword}>Olvide mi contraseña</a>
      <button formAction={handleLogin} style={styles.loginButton}>INICIAR SESIÓN</button>
    </div>
  );
};

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
};

export default Login;
