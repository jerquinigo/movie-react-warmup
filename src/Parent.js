import React from 'react';
import {Child} from './Child';
import { MishMash } from './MishMash';

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      eyeColor: "brown",
      name: "adult",
      hairColor: "black",
      childsName: "Winnie",
      grandChildHairColor: "brown"
    }

    // this.handleGrandChildHairChange = this.handleGrandChildHairChange.bind(this)
  }

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value})
}
  //
  // handleChildNameChange = (event) => {
  //   this.setState({ childsName: event.target.value})
  // }

  render() {
    return(
      <>
      Parent Component Showing
      <br />
      <Child eyeColor={this.state.eyeColor}
      name={this.state.childsName}
      handleChange={this.handleChange}
      grandChildHairColor={this.state.grandChildHairColor}
      />
      <br />
      <br />
      <MishMash name={this.state.name}
        childsName={this.state.childsName}
        grandChildHairColor={this.state.grandChildHairColor}/>
      </>
    )
  }
}

export default Parent;
