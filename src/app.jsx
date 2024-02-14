import React from 'react';
import { createRoot } from 'react-dom/client';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import classes from './app.module.css';

marked.setOptions({
  breaks: true,
  highlight: (code,lang,callback) => {
    return (hljs.highlightAuto(code).value + "<p class='credits'> highlited by <a href='https://highlightjs.org/'>highlight.js</a></p>")
  }
})

//Default markdown
const defaultMarkdown = `# Welcome!
## This is my markdown previewer demo.

Here some code examples: \`<div>Hello world!</div>\`. 
\`<p>Some funny text here</p>\`.

A multiline code:
\`\`\`
function example(someStuff){
  ...modifying someStuff...
  return (someModifyedStuff)
}
\`\`\`

Link to my [codepen](https://codepen.io/enderlorde) and [FreeCodeCamp](https://www.freecodecamp.org/enderlorde).

You can style texts with:
~crossed~
**bold**, 
_italic_,
or **_bolditalic_**. 

Create:

> Blockquotes

- Bulleted list
  - With some cool things
 
 1. Numbered list.
 1. With cool stuff too.

![Handsome picture](https://via.placeholder.com/468x60?text=And+beautiful+pictures!)

Feel free to change anything!
`

//Main app component
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markdown:defaultMarkdown,
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
    
  changeHandler(event){
    this.setState({
      markdown:event.target.value,
    })
  }
  
  render(){
    return (
      <div className={classes.app}>
        <Editor handler={this.changeHandler} markdown={this.state.markdown} />
        <Preview markdown={this.state.markdown} />
      </div>
    )
  }
}

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

//Rendering
const root = createRoot(document.getElementById("root"));
root.render(<App />);