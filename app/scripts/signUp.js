import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import Header from "./header";
import "../styles/common.css";
import "../styles/header.css";
import "../styles/sign-up.css";

$(document).ready(function(){
    let clientHeight = $(window).height();
    $(".sign-up").css({
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
            urnInputState: "initial",//用户名输入框的状态分为获得焦点focus，失去焦点blur，网页载入初始状态initial
            pwdInputState: "initial"//密码输入框的状态分为获得焦点focus，失去焦点blur, 网页载入初始状态initial
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
    //input输入宽失去焦点事件
    usernameOnBlur(){
        this.setState({
            urnInputState: "blur"
        });
        console.log(this.state.urnInputState);
    }
    pwdOnBlur(){
        this.setState({
            pwdInputState: "blur"
        });
    }
    //input获得焦点事件
    usernameOnFocus(){
        this.setState({
            urnInputState: "focus"
        });

    }
    pwdOnFocus(){
        this.setState({
            pwdInputState: "focus"
        });
    }
    //输入框正常是显示的css
    showNormal(elementDom, tipEleDom){
        elementDom.style.cssText = "border-color: #4dca8e; box-shadow: 0 0 5px #4dca8e";//用户名合法则边框显示绿色
        tipEleDom.style.cssText = "visibility: hidden;";//提示框隐藏
    }
    //输入框内的数据错误时显示
    showErr(elementDom, tipEleDom, msg){
        elementDom.style.cssText = "border-color: rgba(255, 0, 0, 0.67); box-shadow: 0 0 5px rgba(255, 0, 0, 0.5)";
        tipEleDom.textContent = msg;//提示框显示错误信息
        tipEleDom.style.cssText = "visibility: visible;";
    }
    //输入框内的数据合法时显示
    showSuccess(elementDom, tipEleDom){
        elementDom.style.cssText = "border-color: #2E43FF; box-shadow: 0 0 5px #2E43FF";//用户名合法则边框显示绿色
        tipEleDom.style.cssText = "visibility: hidden;";//提示框隐藏
    }
    componentDidMount(){
        //第一次打开网页时显示验证码
        this.ajaxForVerify();
        //用户名输入框状态改变显示不同边框及错误提示

    }
    componentWillMount(){
        let usernameDom = ReactDOM.findDOMNode(this.refs.username); //获取输入框dom
        let usernameTipDom = ReactDOM.findDOMNode(this.refs.usernameTip);//获取提示框dom

        //密码输入框状态改变显示不同边框及错误提示
        let pwdDom = ReactDOM.findDOMNode(this.refs.password);
        let pwdTipDom = ReactDOM.findDOMNode(this.refs.pwdTip);

        //用户名输入框判断
        if (this.state.urnInputState == "blur"){
            let resMsg = null;//存储返回的信息
            $.ajax({
                type: "POST",
                url: "../server/sign.php",
                dataType: "json",
                data: {
                    username: usernameDom.value
                },
                success: function(data) {
                    if (!data.success) {
                        resMsg = data.msg;
                        //显示错误状态
                        this.showErr(usernameDom, usernameTipDom, resMsg);

                    }else {
                        //显示正确状态
                        this.showSuccess(usernameDom, usernameTipDom);
                    }
                }.bind(this),
                error: function(jqXHR){
                    console.log("错误代码："+ jqXHR.status);
                }
            });
        }else if (this.state.urnInputState == "focus"){
            //显示正常状态
            this.showNormal(usernameDom, usernameTipDom)
        }else if (this.state.urnInputState == "initial"){
            //do nothing
            return ;
        }
        //密码输入码判断
        if (this.state.pwdInputState == "blur"){
            let resMsg = null;//存储返回的信息
            $.ajax({
                type: "POST",
                url: "../server/sign.php",
                dataType: "json",
                data: {
                    username: pwdDom.value
                },
                success: function(data) {
                    if (!data.success) {
                        resMsg = data.msg;
                        //显示错误状态
                        this.showErr(pwdDom, pwdTipDom, resMsg);

                    }else {
                        //显示正确状态
                        this.showSuccess(pwdDom, pwdTipDom);
                    }
                }.bind(this),
                error: function(jqXHR){
                    console.log("错误代码："+ jqXHR.status);
                }
            });
        }else if (this.state.pwdInputState == "focus"){
            this.showNormal(pwdDom, pwdTipDom);
        }else if (this.state.pwdInputState == "initial"){
            //do nothing
        }
    }
    render(){

        return (
            <div className="sign-up">
                <div className="container">
                    <div className="sign-up-wrap">
                        <form action="" className="sign-form">
                            <h3 className="form-title">注册</h3>
                            <input type="text" className="username-input form-input" name="username" placeholder="请输入用户名/邮箱/手机号"
                            ref="username" onBlur={this.usernameOnBlur.bind(this)} onFocus={this.usernameOnFocus.bind(this)} required/>
                            <span className="tips" ref="usernameTip">123</span>
                            <input type="password" className="password-input form-input" name="password" placeholder="密码（不少于6位）"
                            ref="password" onBlur={this.pwdOnBlur.bind(this)} onFocus={this.pwdOnFocus.bind(this)} required/>
                            <span className="tips" ref="pwdTip" >123</span>
                            <div className="verify-wrap clearfix">
                                <input type="text" className="form-input verify-code fl" placeholder="请出入验证码" required/>
                                <canvas id="verifyImg" className="verifyImg fl" width="90px" height="40px" onClick={this.changeVerify.bind(this)}/>
                            </div>
                            <input type="submit" className="submit-btn form-btn" value="注册" />
                            <button className="form-btn signIn-btn"><a href="" className="form-btn-a">登录</a></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;