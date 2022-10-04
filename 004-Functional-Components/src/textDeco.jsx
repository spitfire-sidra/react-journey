import React from 'react';

function BottomLine(props) {
  return (
    <div style={{borderStyle: "solid", borderWidth: "0 0 1px 0"}}>
      {props.children}
    </div>
  )
}

export default BottomLine;
