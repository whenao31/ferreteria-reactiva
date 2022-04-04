// acá colocas las credenciales de Firebase


// Importe las funciones que necesita de los SDK que necesita
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyAYHD5zZ-1kISNjKKuUoQ41JuNBGAug5S0",
  authDomain: "ferreteria-reto.firebaseapp.com",
  projectId: "ferreteria-reto",
  storageBucket: "ferreteria-reto.appspot.com",
  messagingSenderId: "273842353893",
  appId: "1:273842353893:web:62d846846b8299f4b4060c"
};

// Inicializamos a Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export default firebaseApp