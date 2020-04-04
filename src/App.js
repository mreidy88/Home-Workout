import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from './Components/Header';
import AddWorkout from "./Components/AddWorkout";
import AddTodo from './Components/AddTodo';
import ButtonInc from "./Components/ButtonInc";
import Button from "./Components/Button";
import Footer from './Components/Footer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }


  render() {
    return (
      <>
        <header>
          <Header>Home Workout Tracker</Header>
          <nav></nav>
        </header>
        <main>
          
            <Route 
              exact= "/Addtodo"
              render={routerProps => (
                <AddTodo todoList={this.state.todoList} {...routerProps}/>
              )}
                />
          <Route
            exact
            path="/AddWorkout"
            render={routerProps => (
              <AddWorkout setExercise={this.state.setExercise} {...routerProps} />
            )}
          />
          <Route
            path="/AddWorkout/:equipment"
            render={routerProps => (
              <AddWorkout addExercise={this.state.setExercise} {...routerProps} />
            )}
          />
          <Button>

          </Button>
          <ButtonInc>

          </ButtonInc>
          <Footer>

          </Footer>
        </main>
      </>
    );
  }
}

export default App;
