// acá colocas las credenciales de Firebase


// Importe las funciones que necesita de los SDK que necesita
import { initializeApp } from "firebase/app";


// Configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Inicializamos a Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp