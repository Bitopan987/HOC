import React from 'react';

const HOC = (Component, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: data,
        name: JSON.stringify(localStorage.getItem('username')),
      };
    }

    handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return (
        <Component
          username={this.state.name}
          CounterNumber={this.state.count}
          handleClick={this.handleClick}
        />
      );
    }
  };
};

export default HOC;
