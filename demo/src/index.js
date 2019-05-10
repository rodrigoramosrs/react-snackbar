import React, { Component } from "react";
import { render } from "react-dom";

import ReactSnackBar from "../../src";

class Demo extends Component {
  state = {
    Show: false,
    Showing: false
  };

  show = () => {
    if (this.state.Showing) return;

    this.setState({ Show: true, Showing: true });
    setTimeout(() => {
      this.setState({ Show: false, Showing: false });
    }, 2000);
  };
  render() {
    return (
      <div>
        <h1>react animated interaction Demo</h1>
        Click here to: <input type="button" value="Show" onClick={this.show} />
        <ReactSnackBar Icon={<span>🦄</span>} Show={this.state.Show}>
          Hello there, nice to meet you!
        </ReactSnackBar>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
