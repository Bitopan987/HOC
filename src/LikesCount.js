import React from 'react';
import HOC from './HOC';

class LikesCount extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.username} <br />
        {this.props.CounterNumber} <br />
        <button onClick={this.props.handleClick}>Like</button>
      </div>
    );
  }
}

const EnhancedLikes = HOC(LikesCount, 5);

export default EnhancedLikes;
