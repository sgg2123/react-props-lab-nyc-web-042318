import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h1>Speed: {this.props.speed}</h1>
        <h1>Has rockets? {`${this.props.hasRockets}`}</h1>
        <h1>Colors: {this.props.colors.join(', ')}</h1>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
