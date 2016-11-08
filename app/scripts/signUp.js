import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";

import Header from "./header";
import "../styles/common.css";
import "../styles/header.css";
import "../styles/sign-login.css";

$(document).ready(function(){
    let clientHeight = $(window).height();
    $(".sign-login").css({
        "height": clientHeight + "px"
    });
    //创建获得范围随机数函数
    //function randomNum(min, max){
    //    return Math.floor(Math.random()*(max - min) + min);
    //}
    ////获得随机颜色
    //function randomColor(min, max){
    //    let r = randomNum(min, max);
    //    let g = randomNum(min, max);
    //    let b = randomNum(min, max);
    //    return "rgb(" + r + "," + g + "," + b + ")";
    //}
    ////先用canvas创建画布
    //function drawImg(canvas, text){
    //    let str = text.toString();//需要把number转化为string使用length属性
    //    if(canvas == null){
    //        alert("您的浏览器不支持canvas属性，请升级到最新版");
    //        return false;
    //    }
    //    let width = canvas.width;
    //    let height = canvas.height;
    //    let context = canvas.getContext("2d");
    //    context.fillStyle = randomColor(180, 240);
    //    context.fillRect(0, 0, width, height);
    //
    //    for (let i = 0; i < str.length; i++){
    //        context.fillStyle = randomColor(20, 100);//设置随机字体颜色
    //        let fontSize = randomNum(22, 27);
    //        context.font = fontSize + "px sans-serif";
    //        let x = 5 + i * 20;
    //        let y = randomNum(25,40);
    //        let text = str.substr(i, 1);
    //        let deg = randomNum(-15, 15);
    //        //修改坐标原点，方便进行旋转
    //        context.translate(x, y);
    //        context.rotate(deg * Math.PI/180);
    //        context.fillText(text, 0, 0);
    //
    //        //恢复坐标原点及旋转角度
    //        context.rotate(-deg * Math.PI/180);
    //        context.translate(-x, -y);
    //    }
    //    //绘制干扰线
    //    for(let i = 0; i < 6; i++){
    //        context.strokeStyle = randomColor(40, 180);
    //        context.beginPath();
    //        context.moveTo(randomNum(1, width - 1), randomNum(1, height - 1));
    //        context.lineTo(randomNum(1, width - 1), randomNum(1, height - 1));
    //        context.closePath();
    //        context.stroke();//显示线条
    //    }
    //    //绘制干扰点
    //    for(let i = 0; i < 60; i++){
    //        context.fillStyle = randomColor(0, 255);
    //        context.beginPath();
    //        context.arc(randomNum(1, width - 1), randomNum(1, height - 1), 1, 0, Math.PI * 2);
    //        context.closePath();
    //        context.fill();//显示点
    //    }
    //}
    ////ajax获取验证码函数
    //function ajaxForVerify(){
    //    $.ajax({
    //        type: "POST",
    //        url: "../server/createVerify.php",
    //        dataType: "json",
    //        data: {
    //            verify: "getVerify"
    //        },
    //        success: function(data){
    //            verify = data.verify;//获得验证码
    //            let canvas = $(".verifyImg").get(0);
    //            drawImg(canvas, verify);
    //        },
    //        error: function(jqXHR){
    //            console.log("错误" + jqXHR.status);
    //        }
    //    });
    //}
    ////从服务器获取验证码字符串
    //let verify = null;//存储验证码
    //if (verify == null){
    //    ajaxForVerify();
    //}
});

class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            verify: null,//验证码初始化
            urnInputStyle: {},//用户名输入框样式状态
            urnTipStyle: {},//用户名提示条样式状态
            pwdInputStyle: {},//密码输入框样式状态
            pwdTipStyle: {},//密码提示条样式状态
            verifyInputStyle: {},//验证码样式状态
            urnState: false,//用户名输入框状态若为true则可以进行提交，否则无法提交
            pwdState: false,//密码输入框状态若为true则可以进行提交，否则无法提交
            verifyState: false,//验证码输入框状若为true则可以进行提交，否则无法提交
            submitDisabled: "false"//提交按钮是否可用，默认为不可用
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
    showErr(elementDom, msg, refName){

        if(refName == "username"){
            elementDom.textContent = msg;
            this.setState({
                urnInputStyle: {
                    borderColor: "rgba(255, 0, 0, 0.6)",
                    boxShadow: "0 0 5px rgba(255, 0, 0, 0.67)"
                },
                urnTipStyle: {
                    visibility: "visible"
                },
                urnState: false
            });
        }else if(refName == "password"){
            elementDom.textContent = msg;
            this.setState({
                pwdInputStyle: {
                    borderColor: "rgba(255, 0, 0, 0.6)",
                    boxShadow: "0 0 5px rgba(255, 0, 0, 0.67)"
                },
                pwdTipStyle: {
                    visibility: "visible"
                },
                pwdState: false
            });
        }else if(refName == "verify"){
            this.setState({
                verifyInputStyle: {
                    borderColor: "rgba(255, 0, 0, 0.6)",
                    boxShadow: "0 0 5px rgba(255, 0, 0, 0.67)"
                },
                verifyState: false
            });
        }

    };
    //输入框获得焦点显示样式函数
    showFocus(elementDom, msg, refName){
        elementDom.textContent = msg;
        if(refName == "username"){
            this.setState({
                urnInputStyle: {
                    borderColor: "#047CEE",
                    boxShadow: "0 0 5px #047CEE"
                },
                urnTipStyle: {
                    visibility: "visible",
                    color: "#047CEE"
                }
            });
        }else if(refName == "password"){
            this.setState({
                pwdInputStyle: {
                    borderColor: "#047CEE",
                    boxShadow: "0 0 5px #047CEE"
                },
                pwdTipStyle: {
                    visibility: "visible",
                    color: "#047CEE"
                }
            });
        }

    }
    //输入框数据合法时显示样式函数
    showSuccess(elementDom, msg, refName){

        if(refName == "username"){
            elementDom.textContent = msg;
            this.setState({
                urnInputStyle: {
                    borderColor: "#4dca8e",
                    boxShadow: "0 0 5px #4dca8e"
                },
                urnTipStyle: {
                    visibility: "visible",
                    color: "#4dca8e"
                },
                urnState: true
            });
        }else  if(refName == "password"){
            elementDom.textContent = msg;
            this.setState({
                pwdInputStyle: {
                    borderColor: "#4dca8e",
                    boxShadow: "0 0 5px #4dca8e"
                },
                pwdTipStyle: {
                    visibility: "visible",
                    color: "#4dca8e"
                },
                pwdState:true
            });
        }else if(refName == "verify"){
            this.setState({
               verifyInputStyle: {
                    borderColor: "#4dca8e",
                    boxShadow: "0 0 5px #4dca8e"
                },
                verifyState:true
            });
        }

    }
    //查找字符串,用来检测密码输入框的字符是否都是同一个字符
    findStr(str, value){
        let length = 0;
        for (let i = 0; i < str.length; i++){
            if(str.charAt(i) == value){
                length++;
            }
        }
        return length;
    }
    //input输入宽失去焦点事件
    usernameOnBlur(){
        //输入框失去焦点通过ajax进行服务器查询是否合法
        let usernameDom = SignUp.Dom.usernameDom; //获取输入框dom
        let usernameTipDom = SignUp.Dom.usernameTipDom;//获取提示框dom
        let resMsg = null;//存储返回的信息
        //客户端检测用户名的合法性
        //使用正则表达式检测合法用户名（数字，字母，下划线,汉字），\u4e00-\u9fa5表示Unicode汉字字符集，\w表示字符和下划线，
        let re = /[^\w\u4e00-\u9fa5]/g;//非字符及汉字
        if(usernameDom.value == ""){
            resMsg = "用户名不能为空";
            this.showErr(usernameTipDom, resMsg, "username");
        }else if(re.test(usernameDom.value)){
            resMsg = "含有非法字符";
            this.showErr(usernameTipDom, resMsg, "username");
        }else if(usernameDom.value.length < 6 || usernameDom.value.length > 11){
            resMsg = "用户名的长度应在5-10个字符间";
            this.showErr(usernameTipDom, resMsg, "username");
        }else {
            //客户端检测通过后从服务器检测用户名是否被注册
            $.ajax({
                type: "POST",
                url: "../server/checkUsername.php",
                dataType: "json",
                data: {
                    checkUsername: usernameDom.value
                },
                success: function(data) {
                    if (data.success != 1) {
                        resMsg = data.msg;
                        //显示错误状态
                        this.showErr(usernameTipDom, resMsg, "username");
                    }else {
                        //显示正确状态
                        resMsg = data.msg;
                       this.showSuccess(usernameTipDom, resMsg, "username");
                    }
                }.bind(this),
                error: function(jqXHR){
                    console.log("错误代码："+ jqXHR.status);
                }
            });
        }
    }
    //密码框失去焦点事件
    pwdOnBlur(){
       //判断输入密码是否符合要求
        let pwdDom = SignUp.Dom.pwdDom;
        let pwdTipDom = SignUp.Dom.pwdTipDom;
        let inputValue = pwdDom.value;
        let reNum = /[^\d]/g;//非数字字符正则
        let reStr = /[^a-zA-z]/g;//非字母正则
        //不能用相同字符
        let num = this.findStr(inputValue, inputValue[0]);//输入密码和首个字符相同字符个数
        if(inputValue == ""){
            this.showErr(pwdTipDom, "密码不能为空", "password");
        }else if (num === inputValue.length){
            this.showErr(pwdTipDom, "密码不能使用相同字符", "password");
        }else if(inputValue.length > 16 || inputValue.length < 6){
            this.showErr(pwdTipDom, "密码长度应在6-16个字符间", "password");
        }else if(!reNum.test(inputValue)){
            this.showErr(pwdTipDom, "不能全为数字", "password");
        }else if(!reStr.test(inputValue)){
            this.showErr(pwdTipDom, "不能全为字母", "password");
        }else{
            this.showSuccess(pwdTipDom,"ok", "password");
        }
    }
    //验证码输入框失去焦点
    verifyOnKeyUp(){
        let verifyInput = SignUp.Dom.verifyDom;
        let inputValue = verifyInput.value;
        let strLength = inputValue.length;
        if(strLength < 4 || strLength > 4){
            this.showErr(null, null, "verify");
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
                        this.showSuccess(null, null, "verify");
                    }else if(data.success == 0){
                        this.showErr(null, null, "verify");
                    }
                }.bind(this),
                error: function(jqXHR){
                    console.log("错误代码：" + jqXHR.status)
                }
            });
        }

    }
    //input获得焦点事件
    usernameOnFocus(){
        this.showFocus(SignUp.Dom.usernameTipDom, "用户名应为数字/字母/下划线/汉字", "username");
    }
    pwdOnFocus(){
        this.showFocus(SignUp.Dom.pwdTipDom, "密码不能全为数字或字母，不能全为同一字符", "password");
    }
    //点击注册按钮
    onSignUp(){
        if(this.state.verifyState != true){
            alert("验证码错误，请重新填写");
            SignUp.Dom.verifyDom.focus();
        }else if(this.state.urnState != true){
            alert("用户名格式错误，请重新填写");
            SignUp.Dom.usernameDom.focus();
        }else if(this.state.pwdState != true){
            alert("密码格式错误，请重新填写");
            SignUp.Dom.pwdDom.focus();
        }else {
            $.ajax({
                url: "../server/doSignUp.php",
                type: "post",
                dataType: "json",
                data: {
                    username: SignUp.Dom.usernameDom.value,
                    password: SignUp.Dom.pwdDom.value,
                    verify: SignUp.Dom.verifyDom.value
                },
                success: function(data){
                    switch (data.success){
                        case 0:
                            alert("用户名已被注册，请重新填写");
                            SignUp.Dom.usernameDom.focus();
                            break;
                        case 2:
                            alert("验证码错误，请重新填写");
                            SignUp.Dom.verifyDom.focus();
                            break;
                        case 1:
                            alert("注册成功，将跳转到登入页面");
                            window.location = "login.html";
                    }
                },
                error: function(jqXHR){
                    console.log("错误代码：" + jqXHR.status);
                }
            });
        }
    }
    componentDidMount(){
        //第一次打开网页时显示验证码
        this.ajaxForVerify();
        SignUp.Dom.usernameDom = ReactDom.findDOMNode(this.refs.username); //获取输入框dom
        SignUp.Dom.usernameTipDom = ReactDom.findDOMNode(this.refs.usernameTip);//获取提示框dom
        SignUp.Dom.pwdDom = ReactDom.findDOMNode(this.refs.password);//获取密码输入框dom
        SignUp.Dom.pwdTipDom = ReactDom.findDOMNode(this.refs.pwdTip);//获取密码提示框dom
        SignUp.Dom.verifyDom = ReactDom.findDOMNode(this.refs.verify);//获取验证码输入框dom
    }

    render(){
        return (
            <div className="sign-login">
                <div className="container">
                    <div className="SL-form-wrap">
                        <form action="" method="post" className="sign-form">
                            <h3 className="form-title">注册</h3>
                            <input type="text" className="form-input username-input" name="username" placeholder="请输入用户名/邮箱/手机号"
                                    ref="username" style={this.state.urnInputStyle} onBlur={this.usernameOnBlur.bind(this)}
                                   onFocus={this.usernameOnFocus.bind(this)} required
                            />
                            <span className="tips" ref="usernameTip" style={this.state.urnTipStyle}>123</span>
                            <input type="password" className="form-input password-input" name="password" placeholder="密码（6-16位）"
                                    ref="password" style={this.state.pwdInputStyle} onBlur={this.pwdOnBlur.bind(this)}
                                   onFocus={this.pwdOnFocus.bind(this)} required
                            />
                            <span className="tips" ref="pwdTip" style={this.state.pwdTipStyle} >123</span>
                            <div className="verify-wrap clearfix">
                                <input type="text" className="form-input verify-code fl" placeholder="请出入验证码" style={this.state.verifyInputStyle} ref="verify" onKeyUp={this.verifyOnKeyUp.bind(this)} required/>
                                <canvas id="verifyImg" className="verifyImg fl" width="90px" height="40px" onClick={this.changeVerify.bind(this)}/>
                            </div>
                            <input type="button" className="submit-btn form-btn" value="注册" onClick={this.onSignUp.bind(this)}/>
                            <button className="form-btn signIn-btn"><a href="login.html" className="form-btn-a">登录</a></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
SignUp.Dom = {
    usernameDom: null,
    usernameTipDom: null,
    pwdDom: null,
    pwdTipDom: null,
    verifyDom: null,
};
export default SignUp;