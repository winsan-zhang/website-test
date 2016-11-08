import React from 'react';
import ReactDom from 'react-dom';
import '../styles/header.css';
import '../styles/common.css';
import $ from 'jquery';
/*下拉菜单数据1*/
let dropDownDatas1 = [
	{
		"title": "JQuery",
		"url": "#"
	},{
		"title": "React.js",
		"url": "#"
	},{
		"title": "Angular.js",
		"url": "#"
	},{
		
		"title": "Bootstrap",
		"url": "#"
	}
];
/*下拉菜单数据2*/
let dropDownDatas2 =[
	{
		"title": "Webpack",
		"url": "#"
	},
    {
        "title": "gulp",
        "url": "#"
    },
    {
        "title": "Yeoman",
        "url": "#"
    },
    {
        "title": "Bower",
        "url": "#"
    }
];

//屏幕尺寸改变时，重置改变过的属性
window.onresize = function(){
    let offsetWidht = document.documentElement.offsetWidth|| document.body.offsetWidth;
    if(offsetWidht > 963){
        $('.header-nav').css({
            "display": "inline-block"
        });
    }else {
        $('header').css({
            "height":"80px",
            "background-color": "rgba(34,37,44,1)",
            "opacity": "1"
        });
        $('.header-nav').css({
            "display": "none"
        });
        $('.header-menu').attr("class","header-menu");
        //当屏幕滚动后行高变92，屏幕尺寸变小后，初始化行高
        $(".header-nav-a").css({
            "line-height": "46px"
        })
    }
    //初始化header高度
    changeHeaderHeight();
};
//判断是否滚动离开顶部，若离开顶部则header加宽
let scroll = null;
function changeHeaderHeight(){
    let clientWidht = document.documentElement.clientWidth || document.body.clientWidth;
    //获得滚动距离
    if(document.documentElement.scrollTop){
        scroll =  document.documentElement.scrollTop;
    }else if(document.body.scrollTop){
        scroll =  document.body.scrollTop;
    }
    //判断屏幕尺寸是否大于980，如果小于则不操作
    if(clientWidht > 980){
        if(scroll <= 20){
            $('header').css({
                "opacity": "0.8",
                "height": "46px"
            });
            $('.header-nav-a').css({
                "line-height": "46px"
            });
            $('.login-area').css({
               "line-height": "46px"
            });
            $('.drop-down').css({
                "opacity": "0.8",
                "top": "46px"
            });
        }else if(scroll > 20){
           $('header').css({
                "opacity": "1",
                "height": "92px"
            });
            $('.header-nav-a').css({
                "line-height": "92px",
            });
            $('.drop-down').css({
                "opacity": "1",
                "top": "92px"
            });
            $('.login-area').css({
               "line-height": "92px"
            });
        }
    }
}
//监听屏幕滚动事件，若发生滚动则改变header高度
window.onscroll = function(){
   changeHeaderHeight();
};


/*header下拉菜单组件*/
class DropDown extends React.Component{



	render(){
		return (
            <ul className='drop-down-list'>
                <li className='drop-down-li'>
                    <a className='drop-down-a header-a' href={this.props.data.url} alt={this.props.data.title}>
                        {this.props.data.title}
                    </a>
                </li>
            </ul>
		);
	}
}

/*header导航栏*/
class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLogin: false//用户是否登状态默认设为false；
        }
    }
    /*点击菜单按钮下拉菜单*/
    dropDownMenu(){
        $('.header-nav').slideToggle(300);
        $('.header-menu').toggleClass('trans-rotate');
    }
    //检测用户是否已经登录
    checkLogin(){
        //判断用户id是否存在如果存在则表示已登录
        let urnId = sessionStorage.getItem("id");
        let loginArea = ReactDom.findDOMNode(this.refs.loginArea);
        if(urnId){
            let username = sessionStorage.getItem("username");
            let usernameDom = ReactDom.findDOMNode(this.refs.username);
            usernameDom.textContent = "欢迎您:" + username;
            loginArea.style.cssText = "display: inline-block;";
            this.setState({
               isLogin: true
            });
        }else {
            loginArea.style.cssText = "display: none";
            this.setState({
               isLogin: false
            });
        }
    }
    //用户点击退出按钮
    loginOut(e){
        e.preventDefault();
        sessionStorage.removeItem("id");
        sessionStorage.removeItem(("username"));
        this.setState({
            isLogin: false
        });
        window.location = "index.html";
    }
    componentDidMount(){
        this.checkLogin();
    }
	render(){
		let dropDownMenus1 = [];
		let dropDownMenus2 = [];
        dropDownDatas1.forEach(function(value, index){
            dropDownMenus1.push(<DropDown data={value} key={index}/>);
        });

        dropDownDatas2.forEach(function(value, index){
            dropDownMenus2.push(<DropDown data={value} key={index}/>)
        });
        return (
            <header id="header">
                <div className='container header-content'>
                    <div className='header-menu' onClick={this.dropDownMenu}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                    <nav className='header-nav clearfix'>
                        <div className='header-nav-item '>
                            <a href='#' alt='' className='header-nav-a header-a'>我们公司</a>
                        </div>
                        <div className='header-nav-item header-nav-hover'>
                            <a href='#' alt='' className='header-nav-a header-a'>前端框架/库<span className='down-arrow'>&gt;</span></a>
                            <div className='drop-down'>
                                {dropDownMenus1}
                            </div>
                        </div>
                        <div className='header-nav-item header-nav-hover'>
                            <a href='#' alt='' className='header-nav-a header-a'>自动化工程<span className='down-arrow'>&gt;</span></a>
                            <div className='drop-down'>
                                {dropDownMenus2}
                            </div>
                        </div>
                        <div className='header-nav-item'>
                            <a href='#' alt='' className='header-nav-a header-a'>联系我们</a>
                        </div>
                    </nav>
                    <div className="login-area" ref="loginArea">
                        <a className="login-area-a header-a" ref="username" href=""></a>
                        <a className="login-area-a header-a" href="" onClick={this.loginOut.bind(this)} >退出</a>
                    </div>
                </div>
            </header>
        );

	}
}

export default Header;