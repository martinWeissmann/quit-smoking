import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDf-v9AwV4272oz8R1Cb7WAP7LUhbqv4kw",  // Clave de API web
    authDomain: "quese.firebaseapp.com",               // Este es el authDomain que necesitas
    projectId: "quese-be4ed",                           // ID del proyecto
    storageBucket: "quese.appspot.com",                 // El storageBucket generalmente sigue este formato
    messagingSenderId: "142288183482",                  // Número de proyecto
    appId: "1:142288183482:web:6d12eae2a8b67d6991e283",// ID de la app
    measurementId: "TU_MEASUREMENT_ID"                  // Opcional, si usas Google Analytics
};



// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
