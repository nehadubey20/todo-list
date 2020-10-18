import React from "react";
import logo from "./nd.png";
import "./App.css";

class App extends React.Component{
  render(){
    
     return( 
     <div>
       <img src={logo} width="100" height="100" className="logo"/>
      <h1 className="app-title">TO-DO App</h1>
      <div className="container">
        ADD AN ITEM 
        <br/>
        <input 
        type="text" 
        className="input-text" 
        placeholder="Write a TODO">
        </input>
        <button className="add-btn">
        ADD List
       </button>
       <div className="list">
       <ul >
          <li>
            <input type="checkbox"/>
            Read React Documentation
            <button className="btn">DELETE</button>
          </li>

       </ul>
       
       </div>

      </div>
      
    </div>

      )
  }
}



export default App;