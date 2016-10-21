import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/common.css';
import '../styles/container-entry-sec.css'

class ContainerEntrySec extends React.Component{

	render(){

		return (

			<section className='container-entry-sec'>
				<div className='container-entry-bg'>
					<div className='container'>
						<h1 className='container-entry-title'>DIVI CAFÉ</h1>
						<p className='container-entry-p'>A FULL WEBSITE REDESIGN CASE STUDY</p>
						<button className='btn btn-process'>PROCESS</button>
						<button className='btn btn-live-site'>LIVE SITE</button>
					</div>
				</div>	
			</section>
		);
	}
}
exports default ContainerEntrySec;