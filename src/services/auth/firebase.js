import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Configura tu objeto de configuración de Firebase
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Exporta el objeto de autenticación
export const auth = firebase.auth();
