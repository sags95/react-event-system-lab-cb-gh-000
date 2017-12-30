// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component{
  focus = () => {
    console.log('Good!');
  }


  render(){
    return(
      <button onMouseOver={this.focus}>Click</button>
    )
  }
}
