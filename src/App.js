import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router,
} from 'react-router-dom';




const App = () => {
 //JS above return statement injected into JSX using curly brackets

  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
