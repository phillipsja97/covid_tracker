import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import Home from '../Components/Pages/Home';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Link path="/" exact component={Home} />
        {/* <Link path="/countries" exact component={Countries} /> */}
      </Router>
    </div>
  );
}

export default App;
