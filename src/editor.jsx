import React from 'react';
import classes from './editor.module.css';
import Toolbox from './toolbox';

//Editor component 
class Editor extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return (
        <div>
          <Toolbox title="Editor"/>
          <textarea className={classes.editor} onChange={this.props.handler} value={this.props.markdown}></textarea>
        </div>
      )
    }
}

export default Editor;