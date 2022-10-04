import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import BottomLine from './textDeco';

function Switch(props) {
  const [value, setValue] = useState(false)

  return (
    <div onClick={() => setValue(!value)}>
      switch: {value?'on':'off'}
    </div>
  )
}

class HelloWorld extends React.Component {
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
      <BottomLine>
        <Switch />
        <h1 onClick={this.addCount}>Hello World, {this.props.name} {this.state.count}
        </h1>
        <Switch />
      </BottomLine>
    );
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(
  <HelloWorld name='React' />,
  domContainer
);
