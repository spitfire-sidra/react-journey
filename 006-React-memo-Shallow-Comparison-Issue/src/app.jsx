import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Title(props) {
  console.log('render title');
	return (
		<h1>{props.value.text}</h1>
	);
}

const MemoTitle = React.memo(Title);

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        count: 0,
      }
      this.value = {
        text: 'Click the following line to update count'
      }
  }

  addCount = () => {
      let count = this.state.count + 1
      this.setState({count: count})
      this.value.text = 'The text changed but you can not see'
  }

  render() {
    return (
      <div>
        <MemoTitle value={this.value} />
        <div onClick={this.addCount}>Count: {this.state.count}</div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
