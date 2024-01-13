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
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import { observeAuthState } from './firebase'; // Ajusta la ruta según tu estructura
import TaskManager from './components/TaskManager';
import './App.css';

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
          {user ? (
            <>
            <Route 
              path="/tasks-manager"
              render={() => <TaskManager />}
            />
            </>
          ) : (
            <Redirect to="/login" />
          )}
          <Route
            path="/login"
            render={() => <LoginPage/>}
          />
        </div>
      </Router>
    </div>
  );
};

export default App;
