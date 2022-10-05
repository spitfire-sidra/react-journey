import React from 'react';
import ReactDOM from 'react-dom/client';

class Pure extends React.Component {
  render() {
    console.log('render Pure')
    return (
      <div>
        PureComponent get value: {JSON.stringify(this.props.value)}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  updateCount = () => {
    const count = this.state.count + 1
    this.setState({count: count})
  }

  render() {
    const constValue = {
      a: {
        b: 1
      }
    };
    return (
      <div>
        <h1>PureComponent Test</h1>
        <div>Current value: {JSON.stringify(constValue)}</div>
        <Pure value={constValue} />
        <div>
          <button onClick={this.updateCount}>Update value</button>
        </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
