import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/common.css';
import '../styles/content-third-sec.css';

class ContentThirdSec extends React.Component{

    render(){
        return (
            <div className='content-sec content-third-sec'>
                <div className="container">
                    <div className='center-table'>
                        <div className="content-sec-wrap">
                            <div className='center-table-cell'>
                                <h1 className='content-sec-title third-sec-title'>JQuery</h1>
                                <p className='content-sec-p'>jQuery是一个快速、简洁的JavaScript类库，是继Prototype之后又一个优秀的JavaScript代码库。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。并且兼容各种主流浏览器，如IE 6.0+、FF 1.5+、Safari 2.0+、Opera 9.0+等</p>
                                <button className='btn btn-our_process'><a className="btn-a btn-a-our_process" href="">详细内容<span className='right-arrow'>&gt;</span></a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='content-sec-img' src={require('../images/casestudy-layers.jpg')} alt=""/>
            </div>
        );
    }
}

export default ContentThirdSec;
