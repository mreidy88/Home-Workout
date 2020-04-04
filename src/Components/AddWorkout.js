import React, {Component} from 'react';
import axios from 'axios';



class AddWorkout extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      exerciseList: null
    };
  }

  componentDidMount = async () => {
    const apiKey = "33366c925297d66a5cfe90a003faa973f52d872e";
    const baseURL = "https://wger.de/api/v2/equipment/";
    const exercises = this.props.match.params.exercises;
    axios
    .get(`${baseURL}${apiKey}${exercises}`)
    .then(response => {
    let exerciseObject = response.data;
    this.setState({
      exerciseList: exerciseObject
    });
  })
    .catch (error => {
      console.log(error);
    });
  };


 render () {
   let list = {};
   if(this.state.exerciseList === null) {
     list = [];
   }else {
     list = this.state.exerciseList;
   }
   list = list.map

   return(
     <>
     <div>
   <h1>{list}</h1>
     </div>
     </>
   );
  }
  }
 
  export default AddWorkout;
