import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/footer.css';
class Footer extends React.Component{

    render(){
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer-wrap">
                        <a href="https://github.com/winsan-zhang/website-test" className='author-a' target="_blank">-- Made By Tony Zhang --</a>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;