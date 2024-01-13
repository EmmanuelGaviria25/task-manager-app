// import React from 'react';
// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';
// import './App.css';

// function App() {
//   return (
//     <div className="container">
//       <h1>Task Manager</h1>
//       <TaskForm />
//       <TaskList />
//     </div>
//   );
// }

// export default App;

// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { auth } from './firebase'; // Ajusta la ruta según tu estructura

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser(auth.currentUser);
  };

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <Router>
      <div>
        <h1>Gestor de Tareas</h1>
        {user ? (
          <>
            <button onClick={handleLogout}>Cerrar Sesión</button>
            <TaskForm />
            <TaskList />
          </>
        ) : (
          <Redirect to="/login" />
        )}
        <Route
          path="/login"
          render={() => <LoginPage onLogin={handleLogin} />}
        />
      </div>
    </Router>
  );
};

export default App;
