import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_kY-Xq4Yw2TPmyk51CkUuGMCQMk3RKq4",
  authDomain: "inicio-70691.firebaseapp.com",
  projectId: "inicio-70691",
  storageBucket: "inicio-70691.appspot.com",
  messagingSenderId: "643969179020",
  appId: "1:643969179020:web:7031ed5c66b1da19f00aa9"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la instancia de autenticación
const auth = getAuth(app);
export { auth };
