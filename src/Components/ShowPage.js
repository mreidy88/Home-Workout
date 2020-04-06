import React, { useState, useEffect } from "react";


import axios from 'axios';

function ShowPage() {

  useEffect(() => { 
    results();
  }, []);

const  [addWorkout, setWorkout] = useState([]);
 
const results =  async () => {
  const apiKey = "33366c925297d66a5cfe90a003faa973f52d872e";
  const baseURL = "https://wger.de/api/api/v2/exercise/?equipment=7";
  axios
  .get(`${baseURL}${apiKey}`);

  const addWorkout = await results.json();
  console.log(addWorkout);
  setWorkout(addWorkout);
}

  return (
    <div>
      <h1>Choose Your Weapon Against Boredom!</h1>
      </div>
  );
}

export default ShowPage;
