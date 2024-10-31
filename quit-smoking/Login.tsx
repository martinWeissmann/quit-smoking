import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/firebaseConfig'; // Ajusta la ruta según tu estructura

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login: React.FC = () => {
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Usuario autenticado:', result.user);
            // Aquí puedes manejar lo que quieras hacer después del inicio de sesión
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <button onClick={handleLogin}>Iniciar sesión con Google</button>
        </div>
    );
};

export default Login;
