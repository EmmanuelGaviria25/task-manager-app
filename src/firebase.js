// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmF6CtrT0cM2rUxG0FFON7ctquGL-V_aA",
  authDomain: "task-manager-app-5d17e.firebaseapp.com",
  projectId: "task-manager-app-5d17e",
  storageBucket: "task-manager-app-5d17e.appspot.com",
  messagingSenderId: "802668366623",
  appId: "1:802668366623:web:2cb262d811cf3019e17e2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Agrega una función para observar cambios en la autenticación
const observeAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

export { auth, GoogleAuthProvider, observeAuthState };