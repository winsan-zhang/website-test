import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';
import '../styles/common.css';

class MainIndex extends React.Component{
	render(){
		return (
			<div className='main-index'>
				<Header/>
				<Content/>
                <Footer/>
			</div>
		);
	}
}

ReactDOM.render(
	<MainIndex/>,
	document.getElementById('container-index')
);