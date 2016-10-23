import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/common.css';
import '../styles/content-fifth-sec.css';

class ContentFifthSec extends React.Component{

    render(){
        return (

            <div className='content-fifth-sec'>
                <div className='container'>
                    <div className='center-table'>
                        <div className="content-sec-wrap">
                            <div className='center-table-cell'>
                                <h1 className='content-sec-title fifth-sec-title'>ONLINE STOREFRONT</h1>
                                <p className='content-sec-p fifth-sec-p'>Lodio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis naoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum.</p>
                                <button className='btn btn-view_shop'><a className="btn-a btn-a-view_shop" href="">VIEW THE SHOP<span className='right-arrow'>&gt;</span></a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContentFifthSec;