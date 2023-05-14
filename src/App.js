import * as React from "react";
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import Contact from './components/Contact';
import About from "./components/About";
function App() {

  

  return (
    <Router>
    <div className="App">
    <nav>
    <Link to='/' className="home">Home</Link>
    <Link to='/about' className="home">About</Link>
    <Link to='/contact' className="home">Contact Us</Link>
      </nav> 
        
      <Routes>
      <Route exact path='/' element={<Home/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route  exact path="/about" element={<About/>}/>
       </Routes>
    </div>
    </Router>
  );
}

export default App;
