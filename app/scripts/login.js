/**
 * Created by zhang on 2016/11/6.
 */
import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";

import "../styles/common.css";
import "../styles/sign-login.css";
$(document).ready(function(){
    let clientHeight = $(window).height();
    $(".sign-login").css({
        "height": clientHeight + "px"
    });
});
class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            verify: null,//验证码初始化
            verifyInputStyle: {}//验证码样式状态
        }
    }
    //创建获得范围随机数函数
    randomNum(min, max){
        return Math.floor(Math.random()*(max - min) + min);
    }
    //获得随机颜色
    randomColor(min, max){
        let r = this.randomNum(min, max);
        let g = this.randomNum(min, max);
        let b = this.randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    //绘制验证码
    drawImg(canvas, verifyText){
        let str = verifyText.toString();//需要把number转化为string使用length属性
        if(canvas == null){
            alert("您的浏览器不支持canvas属性，请升级到最新版");
            return false;
        }
        let width = canvas.width;
        let height = canvas.height;
        let context = canvas.getContext("2d");
        context.fillStyle = this.randomColor(180, 240);
        context.fillRect(0, 0, width, height);

        for (let i = 0; i < str.length; i++){
            context.fillStyle = this.randomColor(20, 100);//设置随机字体颜色
            let fontSize = this.randomNum(22, 27);
            context.font = fontSize + "px sans-serif";
            let x = 5 + i * 20;
            let y = this.randomNum(25,40);
            let text = str.substr(i, 1);
            let deg = this.randomNum(-15, 15);
            //修改坐标原点，方便进行旋转
            context.translate(x, y);
            context.rotate(deg * Math.PI/180);
            context.fillText(text, 0, 0);

            //恢复坐标原点及旋转角度
            context.rotate(-deg * Math.PI/180);
            context.translate(-x, -y);
        }
        //绘制干扰线
        for(let i = 0; i < 6; i++){
            context.strokeStyle = this.randomColor(40, 180);
            context.beginPath();
            context.moveTo(this.randomNum(1, width - 1), this.randomNum(1, height - 1));
            context.lineTo(this.randomNum(1, width - 1), this.randomNum(1, height - 1));
            context.closePath();
            context.stroke();//显示线条
        }
        //绘制干扰点
        for(let i = 0; i < 60; i++){
            context.fillStyle = this.randomColor(0, 255);
            context.beginPath();
            context.arc(this.randomNum(1, width - 1), this.randomNum(1, height - 1), 1, 0, Math.PI * 2);
            context.closePath();
            context.fill();//显示点
        }
    }
    //通过ajax从服务器端获取验证码
    ajaxForVerify(){
        $.ajax({
            type: "POST",
            url: "../server/createVerify.php",
            dataType: "json",
            data: {
                verify: "getVerify"
            },
            success: function(data){
                let getVerify = data.verify;//获得验证码
                this.setState({
                    verify: getVerify
                });
                let canvas = $(".verifyImg").get(0);
                this.drawImg(canvas, getVerify);
            }.bind(this),
            error: function(jqXHR){
                console.log("错误" + jqXHR.status);
            }
        });
    }
    //点击验证码图片更改验证码
    changeVerify(){
        this.ajaxForVerify();
    }
    //输入框数据错误显示错误样式函数
    showErr(){
            this.setState({
                verifyInputStyle: {
                    borderColor: "rgba(255, 0, 0, 0.6)",
                    boxShadow: "0 0 5px rgba(255, 0, 0, 0.67)"
                },
                verifyState: false
            });
    }
    //输入框数据合法时显示样式函数
    showSuccess(){
            this.setState({
                verifyInputStyle: {
                    borderColor: "#4dca8e",
                    boxShadow: "0 0 5px #4dca8e"
                },
                verifyState:true
            });
    }
    onLogin(){
        let usernameValue = Login.Dom.usernameDom.value;
        let pwdValue = Login.Dom.pwdDom.value;
        let verifyValue = Login.Dom.verifyDom.value;
        this.checkVerify();
        if(this.state.verifyState != true){
            alert("验证码错误，请重新填写");
            Login.Dom.verifyDom.focus();
        }else if(usernameValue == ""){
            alert("用户名不能为空");
            Login.Dom.usernameDom.focus();
        }else if(pwdValue == ""){
            alert("密码不能为空");
            Login.Dom.pwdDom.focus();
        }else {
            $.ajax({
                url: "../server/doLogin.php",
                type: "post",
                data: {
                    username: usernameValue,
                    password: pwdValue,
                    verify: verifyValue
                },
                success: function(data){
                    switch (data.success){
                        case 0:
                            alert("用户名或密码错误，请重新填写");
                            this.ajaxForVerify();
                            this.checkVerify();
                            Login.Dom.usernameDom.focus();
                            break;
                        case 1:
                            sessionStorage.setItem("username", usernameValue);
                            sessionStorage.setItem("id", data.id);
                            window.location = "index.html";
                            break;
                    }
                }.bind(this),
                error: function(jqXHR){
                    console.log("错误代码：" + jqXHR.status);
                }
            });
        }
    }
    //检测验证码函数
    checkVerify(){
        let verifyInput = Login.Dom.verifyDom;
        let inputValue = verifyInput.value;
        let strLength = inputValue.length;
        if(strLength < 4 || strLength > 4){
            this.showErr();
        }else if(strLength == 4){
            $.ajax({
                type: "POST",
                url: "../server/checkVerify.php",
                dataType: "json",
                data: {
                    verifyValue: inputValue
                },
                success: function(data){
                    if(data.success == 1){
                        this.showSuccess();
                    }else if(data.success == 0){
                        this.showErr();
                    }
                }.bind(this),
                error: function(jqXHR){
                    console.log("错误代码：" + jqXHR.status)
                }
            });
        }
    }
    //验证码输入框检测
    verifyOnKeyUp(){
        this.checkVerify();
    }
    componentDidMount(){
        this.ajaxForVerify();
        Login.Dom.usernameDom = ReactDom.findDOMNode(this.refs.username); //获取输入框dom
        Login.Dom.pwdDom = ReactDom.findDOMNode(this.refs.password);//获取密码输入框dom
        Login.Dom.verifyDom = ReactDom.findDOMNode(this.refs.verify);//获取验证码输入框dom
    }
    render(){
        return (
            <div className="sign-login">
                <div className="container">
                    <div className="SL-form-wrap">
                        <form action="" method="post" className="sign-form">
                            <h3 className="form-title">登录</h3>
                            <input type="text" className="form-input username-input" name="username" placeholder="请输入用户名/邮箱/手机号"
                                   ref="username" required/>
                            <input type="password" className="form-input password-input" name="password" placeholder="密码（6-16位）"
                                   ref="password" required/>
                            <div className="verify-wrap clearfix">
                                <input type="text" className="form-input verify-code fl" placeholder="请出入验证码"  ref="verify" style={this.state.verifyInputStyle} onKeyUp={this.verifyOnKeyUp.bind(this)} required/>
                                <canvas id="verifyImg" className="verifyImg fl" width="90px" height="40px" onClick={this.changeVerify.bind(this)}/>
                            </div>
                            <input type="button" className="submit-btn form-btn" value="登录" onClick={this.onLogin.bind(this)}/>
                            <button className="form-btn signIn-btn"><a href="../public/signUp.html" className="form-btn-a">注册</a></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
Login.Dom = {
    usernameDom: null,
    pwdDom: null,
    verifyDom: null,
};

export default Login;