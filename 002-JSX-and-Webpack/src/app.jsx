import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>React loves JSX!</div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
