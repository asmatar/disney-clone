import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
        <Route exact path='/detail'>
          <Detail />    
        </Route>
        <Route exact path='/'>
          <Home />  
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
