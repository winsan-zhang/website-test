import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Content from './content.js'
import '../styles/common.css';

class Main extends React.Component{
	render(){
		return (
			<div className='main'>
				<Header/>
				<Content/>
			</div>
		);
	}
}

ReactDOM.render(
	<Main/>,
	document.getElementById('container')
);