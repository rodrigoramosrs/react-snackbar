# Snackbar Build For ReactJS
[![NuGet version](https://badge.fury.io/js/react-js-snackbar.svg)](https://www.npmjs.com/package/react-js-snackbar)

![](https://media.giphy.com/media/L2r3TB3IKSV3c2SVPq/giphy.gif)


# Installation
```
npm i react-js-snackbar
```

# Usage Example
```
import React, { Component } from "react";
import ReactSnackBar from "react-js-snackbar";

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
        <h1>React Snackbar Demo</h1>
        Click here to: <input type="button" value="Show" onClick={this.show} />
        <ReactSnackBar Icon={<span>🦄</span>} Show={this.state.Show}>
          Hello there, nice to meet you!
        </ReactSnackBar>
      </div>
    );
  }
}
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
