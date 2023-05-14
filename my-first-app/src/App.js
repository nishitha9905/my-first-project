import * as React from "react";
import { useState ,useEffect} from 'react';
import './App.css';
import { HelloWorld,ByeWorld } from './components/sample';
import { BrowserRouter as Route,Routes,Link, Router } from "react-router-dom";
import Contact from './components/contact';
function App() {
  const [counter,setCounter] = useState(0);
  const updateCounter = () =>{
    setCounter(counter+1);
  }
  useEffect(()=>{
     let count = `clicked ${counter} times`
     document.title = count
},[counter])
  return (
    <div className="App">
      <Router>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact Us</Link>
      </nav>
      <Routes>
      <Route exact path="/" render= {() => (
        <>
         <h1>hello world</h1>
         <HelloWorld/>
         <ByeWorld/>
         <h1>{counter}</h1>
         <button onClick={updateCounter}>Click me</button>
         </>
      )}/>
      </Routes>
      <Routes>
      <Route  exact path="/contact" element={<Contact/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
