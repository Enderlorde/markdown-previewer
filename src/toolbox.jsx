import React from 'react';
import classes from './toolbox.module.css';

class Toolbox extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return (
        <div className={classes.toolbox}>
          <p>{this.props.title}</p>
        </div>
      )
    }
}

export default Toolbox;