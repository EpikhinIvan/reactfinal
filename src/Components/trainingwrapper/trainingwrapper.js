import React, { Component } from 'react';

class TrainingWrapper extends Component {
  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (child, index) => 
          React.cloneElement(child, { key: index, extraProp: 'Mayo' })
        )}
      </div>
    );
  }
}

export default TrainingWrapper;
