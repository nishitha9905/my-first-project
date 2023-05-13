import * as React from "react";
import { useState ,useEffect} from 'react';
import './App.css';
import { HelloWorld,ByeWorld } from './components/sample';
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
    <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact Us</a>
      </nav>
      <h1>hello world</h1>
      <HelloWorld/>
      <ByeWorld/>
      <h1>{counter}</h1>
      <button onClick={updateCounter}>Click me</button>
    </div>
  );
}

export default App;
