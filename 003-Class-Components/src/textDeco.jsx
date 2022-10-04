import React from 'react';

class BottomLine extends React.Component {
  render() {
    return (
      <div style={{borderStyle: "solid", borderWidth: "0 0 1px 0"}}>
        {this.props.children}
      </div>
    )
  }
}

export default BottomLine;
