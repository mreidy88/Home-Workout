import React, { Component } from 'react';

class Header extends Component {
    render() {
    return(
        <header>
         <Header>
         <h1>Home Workout Tracker</h1>
         <Link className="home-link" to="/">
         </Link>
          <nav>
            <Link className="nav-link" to="/breweries/1">
              <h2>Workouts</h2>
            </Link>
            <Link className="nav-link" to="/beers/1">
              <h2>Exercises</h2>
            </Link>
            <Link className="nav-link" to="/about">
              <h2>About</h2>
            </Link>
          </nav>
            </Header>
        </header>
        );
    }
}

export default Header;