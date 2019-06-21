import React, { Component } from 'react';

export class About extends Component {
  static displayName = About.name;
  // constructor (props) {
  //   super(props);
  // }
  render () {
    return (
      <div>
        <h1>关于我们</h1>
        <p>给媳妇做的工具.</p>
      </div>
    );
  }
}
