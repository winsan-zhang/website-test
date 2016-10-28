import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Header from './header';
import '../styles/common.css';
import '../styles/header.css';
import '../styles/sign-up.css';

$(document).ready(function(){
    let clientHeight = $(window).height();
    $('.sign-up').css({
        "height": clientHeight + "px"
    });
});


class SignUp extends React.Component{

    render(){
        return (
            <div className='sign-up'>
                <div className='container'>
                    <div className="sign-up-wrap">
                        <form action="" className="sign-form">
                            <h3 className='form-title'>注册</h3>
                            <input type="text" className="username-input form-input" id="username" placeholder="请输入用户名/邮箱/手机号" />
                            <span className='tips'>123</span>
                            <input type="password" className="password-input form-input" id="password" placeholder="密码"/>
                            <span className='tips'>123</span>
                            <input type="text" className='form-input verify-code' placeholder="请出入验证码"/>
                            <input type="submit" className='submit-btn form-btn' value="注册" />
                            <button className='form-btn signIn-btn'><a href="" className='form-btn-a'>登录</a></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;