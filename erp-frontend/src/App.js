import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login'
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
        <Route>

        </Route>
        </Switch>
        
      </Router> */}
      <Login />
    </div>
  );
}

export default App;
