import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import store from './store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <Router>
        <Switch>
        <Route>

        </Route>
        </Switch>
        
      </Router> */}
      <Login />
    </div>
    </Provider>
  );
}

export default App;
