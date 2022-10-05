import React from 'react';
import ReactDOM from 'react-dom/client';

class Pure extends React.PureComponent {
  render() {
    return (
      <div>
        PureComponent get "b" value: {this.props.value.a.b}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.value = {
      a: {
        b: 1
      }
    }
  }

  updateValue = () => {
    this.value.a.b += 1
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <h1>PureComponent Test</h1>
        <div>Current "b" value: {this.value.a.b}</div>
        <Pure value={this.value} />
        <div>
          <button onClick={this.updateValue}>Update value</button>
        </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
