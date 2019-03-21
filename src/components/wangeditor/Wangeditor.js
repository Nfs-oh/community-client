import React, { Component } from 'react';
import E from 'wangeditor';
import { Button } from 'antd'

class Wangeditor extends Component {
	constructor() {
		super();
		this.state = {
			editContent: ""
		}
	}
	componentDidMount() {
		let editorElem = this.refs.editorElem;
		const editor = new E(editorElem);
		editor.customConfig.onchange = html => {
	      this.setState({
	        editorContent: html
	      })
	    }
    	editor.create()
	}
	handleSave = () => {
		let { receiveArticle } = this.props;
		let { editContent } = this.state;
		receiveArticle(editContent);
	}
  	render() {
   	 	return (
      		<div className="wangeditor">
          		<div ref="editorElem" className="wangeditor-box"></div>
          		
      		</div>
    	);
  	}
}

export default Wangeditor;
