import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/common.css';
import '../styles/content-entry-sec.css'

class ContentEntrySec extends React.Component{

    //点击页面下滑一个屏幕
    dropDown(){
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

        let timer = setInterval(function(){
            let scTop = document.documentElement.scrollTop || document.body.scrollTop;
            document.documentElement.scrollTop = document.body.scrollTop += 20;
            if(scTop >= clientHeight - 92){
                clearInterval(timer);
            }
        },20)
    }
	render(){
		return (
			<section className='content-entry-sec'>
				<div className='content-entry-bg'>
					<div className='container center-table'>
						<div className='center-table-cell'>
							<h1 className='content-entry-title'>DIVI CAFÉ</h1>
							<p className='content-entry-p'>A FULL WEBSITE REDESIGN CASE STUDY</p>
							<button className='btn btn-process'><a className="btn-a" href="">PROCESS<span className='right-arrow'>&gt;</span></a></button>
							<button className='btn btn-live-site'><a className="btn-a" href="">LIVE SITE<span className='right-arrow'>&gt;</span></a></button>
						</div>
						<div className='next-page center-table'><span className='down-arrow center-table-cell' onClick={this.dropDown}>&gt;</span></div>
					</div>
				</div>	
			</section>
		);
	}
}
export default ContentEntrySec;