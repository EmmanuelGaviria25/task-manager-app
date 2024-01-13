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

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import { observeAuthState } from './firebase'; // Ajusta la ruta según tu estructura
import TaskManager from './components/TaskManager';
import './App.css';
import logo from './logo.png';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    observeAuthState((user) => {
      setUser(user);
    });
  }, []);

  return (
    
    <div className="container">
      <Router>
        <div>
          <div className="centered-container">
            <img src={logo} alt="Logo" className="centered-image" /> {/* Usa la imagen importada */}
          </div>
          {user ? (
            <>
            <Redirect to="/tasks-manager" />
            </>
          ) : (
            <Redirect to="/login" />
          )}
          
          <Switch>
            <Route path="/tasks-manager" component={TaskManager} />
            <Route path="/login" component={LoginPage} />
          </Switch>
          
        </div>
      </Router>
    </div>
  );
};

export default App;
