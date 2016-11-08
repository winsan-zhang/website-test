import React from 'react';
import ReactDom from 'react-dom';
import '../styles/common.css';
import '../styles/content-entry-sec.css'
import $ from 'jquery';

//页面下滑箭头
$(document).ready(function(){
    function slideDown(){
        let flage = 0;//是否下移标识
        let nextBtn = $('.next-page');
        let timer = setInterval(function(){
            if(flage === 0){
                nextBtn.css({
                    "transform": "translateY(10px)",
                    "-webkit-transform": "translateY(10px)",
                    "-moz-transform": "translateY(10px)"
                });
                flage = 1;
            }else if (flage === 1){
                nextBtn.css({
                    "transform": "translateY(-10px)",
                    "-webkit-transform": "translateY(-10px)",
                    "-moz-transform": "translateY(-10px)"
                });
                flage = 0;
            }
        },500)
    }
    slideDown();
});

class ContentEntrySec extends React.Component {

    checkLogin() {
        //判断用户id是否存在如果存在则表示已登录
        let urnId = sessionStorage.getItem("id");
        let btnSign = ContentEntrySec.Dom.btnSign;
        let btnLogin =  ContentEntrySec.Dom.btnLogin;
        if (urnId) {
            btnSign.style.cssText = "display: none";
            btnLogin.style.cssText = "display: none";
        }
    }
    componentDidMount(){
        ContentEntrySec.Dom.btnSign = ReactDom.findDOMNode(this.refs.btnSign);
        ContentEntrySec.Dom.btnLogin = ReactDom.findDOMNode(this.refs.btnLogin);
        this.checkLogin();
    }
    render()
    {
        return (
            <section className='content-entry-sec'>
                <div className='content-entry-bg'>
                    <div className='container center-table'>
                        <div className='center-table-cell'>
                            <h1 className='content-entry-title'>前端周刊</h1>
                            <p className='content-entry-p'>汇聚最前沿的前端咨询</p>
                            <button className='btn btn-sign_up' ref="btnSign"><a className="btn-a" href="signUp.html">注册<span
                                className='right-arrow'>&gt;</span></a></button>
                            <button className='btn btn-login' ref="btnLogin"><a className="btn-a" href="login.html">登录<span
                                className='right-arrow'>&gt;</span></a></button>
                        </div>
                        <div ref="next-page" className='next-page center-table'><span
                            className='down-arrow center-table-cell'>&gt;</span></div>
                    </div>
                </div>
            </section>
        );
    }
}
ContentEntrySec.Dom = {
    btnLogin: null,//登录按钮dom
    btnSign: null//注册按钮dom
};
export default ContentEntrySec;