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
                                <h1 className='content-sec-title fourth-sec-title'>100% FLUID & RESPONSIVE</h1>
                                <p className='content-sec-p'>Lodio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis naoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis </p>
                                <button className='btn btn-learn_more'><a className="btn-a btn-a-learn_more" href="">LEARN MORE<span className='right-arrow'>&gt;</span></a></button>
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
