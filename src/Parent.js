import React from 'react';
import {Child} from './Child';

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      eyeColor: "brown",
      name: "adult",
      hairColor: "black",
      childsName: "Winnie"
    }

    // this.handleChildNameChange = this.handleChildNameChange.bind(this)
  }

  handleChildNameChange = (event) => {
    this.setState({ childsName: event.target.value})
  }

  render() {
    return(
      <>
      Parent Component Showing
      <br />
      <Child eyeColor={this.state.eyeColor}
      name={this.state.childsName}
      changeMyName={this.handleChildNameChange}/>
      </>
    )
  }
}

export default Parent;
