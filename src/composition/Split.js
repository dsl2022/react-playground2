import React from 'react'
import './Split.css'

function Split(props){
  const combineClassName = props.className;
  const newStyles = {flex:props.flexBasis}
  return (
    
    <div className= {combineClassName}
        style={newStyles}>
      {props.children}
    </div>
  );
}


export default Split;