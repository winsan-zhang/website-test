import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/common.css';
import '../styles/content-entry-sec.css'
import $ from 'jquery';

//页面下滑箭头
$(document).ready(function(){
    function slideDown(){
        let nexBtn = document.getElementsByTagName('next-page');
        let flage = 0;//是否下移标识
        let timer = setInterval(function(){
            if(flage === 0){
                $('#next-page').css({
                    "transform": "translateY(10px)",
                    "-webkit-transform": "translateY(10px)",
                    "-moz-transform": "translateY(10px)"
                });
                //nexBtn.style.cssText = "transform: translateY(10px)";
                flage = 1;
            }else if (flage === 1){
                $('#next-page').css({
                    "transform": "translateY(-10px)",
                    "-webkit-transform": "translateY(-10px)",
                    "-moz-transform": "translateY(-10px)"
                });
                //nexBtn.style.cssText = "transform: translateY(-10px)";
                flage = 0;
            }
        },500)
    }
    slideDown();
});
class ContentEntrySec extends React.Component{

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
						<div ref="next-page" className='next-page center-table'><span className='down-arrow center-table-cell'>&gt;</span></div>
					</div>
				</div>	
			</section>
		);
	}
}

export default ContentEntrySec;