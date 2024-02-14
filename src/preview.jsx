import React from 'react';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import Toolbox from './toolbox';
import classes from './preview.module.css';
import './highlight.css';

const marked = new Marked(
  markedHighlight({
    langPrefix: classes.hljs,
    highlight(code) {
      return hljs.highlightAuto(code).value
    }
  })
)

//Preview component
class Preview extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
          <div> 
              <Toolbox title="Preview" />
              
              <div className={classes.preview} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(this.props.markdown))}}>
              </div>
          </div>)
    }
}

export default Preview;
  