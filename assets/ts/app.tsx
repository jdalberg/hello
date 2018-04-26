// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import { h, render, Component } from 'preact';

export interface AppState {
  ticks: number;
}

export class App extends Component<{}, AppState> {
  componentWillMount() {
    this.setState({ticks: 0});
  }
  componentDidMount() {
    setInterval( () => this.setState({ticks: this.state.ticks+1}), 1000 );
  }
  render() {
    const {ticks} = this.state;
    return <div>ticks {ticks}</div>;
  }
}

render(<App/>, document.body);
