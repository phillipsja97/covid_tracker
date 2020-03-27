import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import Home from '../Components/Pages/Home';
import MyNavbar from '../Components/Shared/Navbar/Navbar';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Link path="/" exact component={Home} />
        {/* <Link path="/countries" exact component={Countries} /> */}
      </Router>
    </div>
  );
}

export default App;
