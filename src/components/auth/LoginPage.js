import React, { useEffect, useState } from 'react';
import { auth, GoogleAuthProvider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginPage = () => {

  const [error, setError] = useState(null);
  const history = useHistory();
  
  useEffect(() => {
    // Observa cambios en la autenticación
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Si ya hay un usuario autenticado, redirige a la página de gestión de tareas
      if (user) {
        history.push('/tasks-manager');
      }
    });

    // Limpia la suscripción al desmontar el componente
    return () => unsubscribe();
  }, [history]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>
      <button className="login-button" onClick={handleLogin}>
        <FontAwesomeIcon icon={faGoogle} className="google-icon" />
        Iniciar Sesión con Google
      </button>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginPage;