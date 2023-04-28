import React from "react";
import './App.css';
import HelloWorld from "./component/HelloWorld";



function App() {

  const name = "react";

  const Hello = "HW~";

  return (
    <div className="wrapper">
      <h2 className="text">hi</h2>
      <HelloWorld hello={Hello}/>
      <h2>{name}</h2>
    </div>
    
  );
}

export default App;
