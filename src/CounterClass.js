import React from "react";

export default class extends React.Component {
  state = {
    current: 1,
  };

  inc = () => {
    this.setState({ current: this.state.current + 1 });
  }

  inc1 = () => {
    this.setState({ current: this.state.current - 1 });
  }

  render() {
    return (
      <div>
        <span>{this.state.current}</span>
        <button type="submit" onClick={this.inc}>
          +
        </button>
        <button type="submit" onClick={this.inc1}>
          -
        </button>
      </div>
    );
  }
}
