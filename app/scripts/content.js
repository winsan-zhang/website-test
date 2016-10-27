import React from 'react';
import ReactDOM from  'react-dom';

import ContentEntrySec from './content-entry-sec.js';
import ContentSecondSec from './content-second-sec.js';
import ContentThirdSec from './content-third-sec.js';
import ContentFourthSec from './content-fourth-sec.js';
import ContentFifthSec from './content-fifth-sec.js';

class Content extends React.Component{
    render(){
        return (
            <div className="">
                <ContentEntrySec/>
                <ContentSecondSec/>
                <ContentThirdSec/>
                <ContentFourthSec/>
                <ContentFifthSec/>
            </div>
        );
    }
}

export default Content;