import React from 'react';
import ReactDOM from  'react-dom';

import ContentEntrySec from './content-entry-sec';
import ContentSecondSec from './content-second-sec';
import ContentThirdSec from './content-third-sec';
import ContentFourthSec from './content-fourth-sec';
import ContentFifthSec from './content-fifth-sec';

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