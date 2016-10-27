import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.js';
import SignUp from './signUp.js';
import Footer from './footer.js';
import '../styles/common.css';


class MainSignUp extends React.Component{

    render(){
        return (
            <div className='main-signUp'>
                <Header/>
                <SignUp/>
            </div>
        );
    }
}

ReactDOM.render(
    <MainSignUp/>,
    document.getElementById('container-signUp')
);
