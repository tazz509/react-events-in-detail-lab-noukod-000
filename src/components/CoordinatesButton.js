// Code CoordinatesButton Component Here
<<<<<<< HEAD
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

handleClick = (event) => {
  const newArray = [event.clientX, event.clientY]
  this.props.onReceiveCoordinates(newArray)
}

  render() {
    return (
      <button
      onClick={this.handleClick}
      >
      </button>
    )
  }

}
=======
import React {component} from 'react';

class CoordinatesButton extends React.Component {

}

export default CoordinatesButton;
>>>>>>> 337ec0660e3fd7a3e873cefb6ac0b1e05e602807
