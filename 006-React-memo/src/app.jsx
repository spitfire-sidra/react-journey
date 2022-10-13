import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Title(props) {
  console.log('render title');
	return (
		<h1>{props.value}</h1>
	);
}

const MemoTitle = React.memo(Title);

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        count: 0,
      }
  }

  addCount = () => {
      let count = this.state.count + 1
      this.setState({count: count})
  }

  render() {
    return (
      <div>
        <MemoTitle value="Click the following line to update count" />
        <div onClick={this.addCount}>Count: {this.state.count}</div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
