import React, { useState } from 'react';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic here (e.g., API call)
      console.log('Logging in with:', { email, password });
    } else {
      // Handle registration logic here (e.g., API call)
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      console.log('Registering with:', { email, password, confirmPassword });
      // Add your registration logic here (e.g., API call)
    }
  };

  return (
    <div style={styles.authContainer}>
      <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {!isLogin && (
          <div style={styles.formGroup}>
            <label>Confirmar Contraseña:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
        )}
        <button type="submit" style={styles.button}>
          {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
        </button>
      </form>
      <button
        type="button"
        onClick={() => setIsLogin(!isLogin)}
        style={styles.toggleButton}
      >
        {isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia Sesión'}
      </button>
    </div>
  );
};

const styles = {
  authContainer: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
  } as React.CSSProperties,
  formGroup: {
    marginBottom: '15px',
  } as React.CSSProperties,
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  } as React.CSSProperties,
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#f49034',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
  } as React.CSSProperties,
  toggleButton: {
    marginTop: '10px',
    background: 'none',
    border: 'none',
    color: '#f49034',
    cursor: 'pointer',
  } as React.CSSProperties,
};

export default AuthForm;
