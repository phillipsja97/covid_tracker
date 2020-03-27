import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import Home from '../Components/Pages/Home/Home';
import Countries from '../Components/Pages/Countries/Countries';
import MyNavbar from '../Components/Shared/Navbar/Navbar';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/countries" exact component={Countries} />
      </Router>
    </div>
  );
}

export default App;
