import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Nav from './Components/Nav';
import ShowPage from './Components/ShowPage';


  function App() {
    return(
      <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Components/ShowPage" component={ShowPage}/>
        </Switch>
      </div>
      </Router>
    )
  }

  const Home = () => (
    <div>
      <h1>Home</h1>
    </div>
  );


export default App;
