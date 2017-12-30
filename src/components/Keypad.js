// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component{

  passPrompt = () => {
    console.log('Entering password...');
  }

  render(){
    return(
      <div>
        <input type="password" onkeyup={this.passPrompt}/>
      </div>
    )
  }
}
