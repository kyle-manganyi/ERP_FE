import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import RegisterUser from './component/registerUser';
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
      <RegisterUser />
    </div>
    </Provider>
  );
}

export default App;
