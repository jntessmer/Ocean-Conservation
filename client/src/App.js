import React, { Component } from "react";
import Nav from "./Components/Nav/index"
import "./App.scss";
import Main from "./pages/main"
import Foot from ".//Components/Footer/Foot"
import Container from "./pages/container";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Redtide from "./pages/redtide";
import Overfsh from "./pages/overfishing";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <h1> C.C.M.R.J Oceanic Conservation</h1>
           <Nav />

          
         
          <Route exact path="/" component={Main} />
          <Route exact path="/overfishing" component={Overfsh} />


      <Foot />
        </div>
       
      </div>

      </Router>
    );
  }

  
  




}


export default App;
