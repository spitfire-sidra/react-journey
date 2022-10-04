const e = React.createElement;

class HelloWorld extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        count: 0,
      }
      this.addCount = this.addCount.bind(this)
  }

  addCount() {
      let count = this.state.count + 1
      this.setState({count: count})
  }

  render() {
    return e('h1', {onClick: this.addCount},
      'Hello World, ' + this.props.name + ' ' + this.state.count
    );
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(HelloWorld, {name: 'React'}), domContainer);
