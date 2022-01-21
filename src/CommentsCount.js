import React from 'react';
import HOC from './HOC';

class CommentsCount extends React.Component {
  render() {
    return (
      <div>
        Total Commements : {this.props.CounterNumber} <br />
        <button onClick={this.props.handleClick}>Add Comment</button>
      </div>
    );
  }
}

const EnhancedComments = HOC(CommentsCount, 10);

export default EnhancedComments;
