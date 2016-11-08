import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/common.css';
import '../styles/content-fourth-sec.css';

class ContentFourthSec extends React.Component{

    render(){
        return (
            <div className='content-sec content-fourth-sec'>
                <div className="container">
                    <div className='center-table'>
                        <div className="content-sec-wrap">
                            <div className='center-table-cell'>
                                <h1 className='content-sec-title fourth-sec-title'>ReactJs</h1>
                                <p className='fourth-sec-p content-sec-p'>React 起源于 Facebook 的内部项目，其设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。衍生出的 React Native 项目，目标更是宏伟，希望用写 Web App 的方式去写 Native App。</p>
                                <button className='btn btn-learn_more'><a className="btn-a btn-a-learn_more" href="">详细内容<span className='right-arrow'>&gt;</span></a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='content-sec-img' src={require('../images/casestudy-mobile.jpg')} alt=""/>
            </div>
        );
    }
}

export default ContentFourthSec;
