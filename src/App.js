
import './App.css';
import Header from './components/Header'
import Myself from './components/challenges/day01/Myself'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
 //JS above return statement injected into JSX using curly brackets

  return (
    <div className="App">
    
    <Header /> {/* this is how you mount a component */}
    <Myself />
    <Home />
    <Footer />
    </div>
    
  );
}

export default App;
