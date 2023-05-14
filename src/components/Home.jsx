import * as React from "react";
function Home (){
    const [counter,setCounter] = React.useState(0);

  const updateCounter = () =>{
    setCounter(counter+1);
  }

  React.useEffect(()=>{
    document.title = `clicked ${counter} times`
},[counter])
    return (
        <>
        <h1>HelloWorld</h1>
        <h1>ByeWorld</h1>
        <h1>{counter}</h1>
         <button onClick={updateCounter}>Click me</button>
        </>
    )
}
export default Home