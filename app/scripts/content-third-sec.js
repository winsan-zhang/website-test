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
                                <h1 className='content-sec-title third-sec-title'>DESIGN & STRATEGY</h1>
                                <p className='content-sec-p'>Lodio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis naoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum.</p>
                                <button className='btn btn-our_process'><a className="btn-a btn-a-our_process" href="">OUR PROCESS<span className='right-arrow'>&gt;</span></a></button>
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
