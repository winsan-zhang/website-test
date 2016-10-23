import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/common.css';
import '../styles/content-second-sec.css'

class ContentSecondSec extends React.Component{

    render(){
        return (
            <div className='content-second-sec'>
                <div className='container '>
                    <div className='content-second-wrap clearfix'>
                        <div className='content-second-item'>
                            <div className='content-second-icon'><img src={require('../images/casestudy-blurb-icons-06.svg')} alt=""/></div>
                            <div className='content-second-text'>
                                <h4 className='content-second-title'>DESIGN MAKEOVER</h4>
                                Lodio, dapibus ac facilisis in, eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio.
                            </div>
                        </div>
                        <div className='content-second-item'>
                            <div className='content-second-icon'><img src={require('../images/casestudy-blurb-icons-08.svg')} alt=""/></div>
                            <div className='content-second-text'>
                                <h4 className='content-second-title'>CONTENT STRATEGY</h4>
                                Lodio, dapibus ac facilisis in, eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio.
                            </div>
                        </div>
                        <div className='content-second-item'>
                            <div className='content-second-icon'><img src={require('../images/casestudy-blurb-icons-05.svg')} alt=""/></div>
                            <div className='content-second-text'>
                                <h4 className='content-second-title'>MOBILE FRIENDLY</h4>
                                Lodio, dapibus ac facilisis in, eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio.
                            </div>
                        </div>
                        <div className='content-second-item'>
                            <div className='content-second-icon'><img src={require('../images/casestudy-blurb-icons-07.svg')} alt=""/></div>
                            <div className='content-second-text'>
                                <h4 className='content-second-title'>E-COMMERCE STORE</h4>
                                Lodio, dapibus ac facilisis in, eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContentSecondSec;