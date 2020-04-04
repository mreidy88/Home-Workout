import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BaseURL = "https://wger.de/api/v2/equipment/";
const APIkey = "33366c925297d66a5cfe90a003faa973f52d872e";

class BirdList extends Component {
  constructor(props) {
    super(props);
    const birdList = 
    this.state = {
      birdList: birdList
    };
  }

  render() {
    let list = this.state.birdList.map((item, idx) => {
      return (
        <Link key={idx} className="bird-link" to={"/bird/" + item.name}>
          <img alt="" className="bird-link-image" src={item.image} />
        </Link>
      );
    });
    return (
      <div className="bird-list-holder">
        <div className="bird-list-nav">
          <h2>Birds</h2>
          <h4>
            <em>(Add a new bird)</em>
          </h4>
        </div>
        <div className="bird-list">{list}</div>
      </div>
    );
  }
}

export default BirdList;