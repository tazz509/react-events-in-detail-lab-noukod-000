<<<<<<< HEAD
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleClick = (event) => {

    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
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
// Code DelayedButton Component Here
import React {component} from 'react';

class DelayedButton extends React.Component {

}

import default DelayedButton;
>>>>>>> 337ec0660e3fd7a3e873cefb6ac0b1e05e602807
