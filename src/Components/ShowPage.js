import React, { Component } from "react";
import AddWorkout from "./AddWorkout";
import Header from './Components/Header';
import Footer from './Components/Footer';

export default class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  

  render() {
    
    return (
        <main>
          <Header>

          </Header>
            <AddWorkout>
                
            </AddWorkout>
      <section className="show-box"> />
        <div className="exercise-info">
          <h2>{exercise}</h2>
          <p>
            ({equipment}{none})
          </p>
        </div>
      </section>
      <Footer></Footer>
      </main>
    );
  }
}
