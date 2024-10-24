"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthYear: '',
    gender: ''
  });

  const router = useRouter();  // Para la navegación
  const handleBack = () => {
    router.back();  // Regresa a la página anterior
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Aquí puedes agregar la lógica para manejar el registro de usuarios
  };

  return (
    <div style={styles.wrapper}>
      {/* Flecha para regresar */}
      <button onClick={handleBack} style={styles.backButton}>
        ← 
      </button>

      <img
        src="/vector.png"  // Imagen izquierda
        alt="Decoración izquierda"
        style={styles.imageLeft}
      />
      <div style={styles.registerContainer}>
        <h2>Ingresa tus datos para que tu vida sin humo comience hoy</h2>
        <form onSubmit={handleSubmit} style={styles.registerForm}>
          
          

          <div style={styles.inputGroup}>
            <input 
              type="email" 
              name="email" 
              placeholder="Correo electronico..." 
              value={formData.email} 
              onChange={handleChange} 
              style={styles.input}
              required 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Contraseña..." 
              value={formData.password} 
              onChange={handleChange} 
              style={styles.input}
              required 
            />
          </div>

          

          <button type="submit" style={styles.button}>Iniciar Sesion</button>
        </form>
      </div>
      <img
        src="/imagen.png"  // Imagen derecha
        alt="Decoración derecha"
        style={styles.imageRight}
      />

      <div style={styles.logo}>
        <img src="/OS.png" alt="logo qs" style={styles.logoImage} />
      </div>
    </div>
  );
};

// Estilos inline
const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative' as 'relative',
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "460px",
    
  },
  
  backButton: {
    cursor: 'pointer',
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '44px',
    color: '#F7931E',
    backgroundColor: 'transparent', // Fondo transparente
    border: 'none',                 // Sin borde
    padding: 0,                     // Sin padding
    outline: 'none',                // Sin outline
  },
  registerContainer: {
    backgroundColor: 'transparent', // Fondo transparente
    padding: '150px',
    borderRadius: '10px',
    maxWidth: '400px',
    textAlign: 'center' as 'center',
    zIndex: 1,
    marginLeft: '90px', // Ajusta este valor para mover más a la derecha
  },
  registerForm: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'space-between' as 'space-between',
  },
  input: {
    padding: '10px',
    width: '48%',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '15px',
    backgroundColor: '#000',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  imageLeft: {
    position: 'absolute',
    top: '18%',
    left: '11%',
    width: '200px', 
    height: 'auto',
  },
  imageRight: {
    position: 'absolute' as 'absolute',
    right: '0',
    top: '100%',
    transform: 'translateY(-50%)',
    zIndex: 0,
  },
};

export default RegisterForm;
