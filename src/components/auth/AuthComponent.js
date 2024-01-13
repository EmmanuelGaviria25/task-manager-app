// LoginPage.js

import React, { useState } from 'react';
import { auth } from '../firebase'; // Ajusta la ruta según tu estructura

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      onLogin(); // Llama a la función de redirección después de iniciar sesión
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Contraseña:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginPage;
