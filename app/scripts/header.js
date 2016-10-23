import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/header.css';
import '../styles/common.css';
import $ from 'jquery';
/*下拉菜单数据1*/
let dropDownDatas1 = [
	{
		"title": "MONARCH",
		"url": "#"
	},{
		"title": "DIVI",
		"url": "#"
	},{
		"title": "BLOOM",
		"url": "#"
	},{
		
		"title": "DIVI CAFE",
		"url": "#"
	}
];
/*下拉菜单数据2*/
let dropDownDatas2 =[
	{
		"title": "DIVI CAFE",
		"url": "#"
	}
];

//屏幕尺寸改变时，重置改变过的属性
window.onresize = function(){
    let clientWidht = document.documentElement.clientWidth || document.body.clientWidth;
    if(clientWidht > 980){
        $('.header-nav').css({
            "display": "inline-block"
        });
    }else {
        $('header').css({
            "height":"40px",
            "background-color": "rgba(34,37,44,1)",
            "opacity": "1"
        });
        $('.header-nav').css({
            "display": "none"
        });
        $('.header-menu').toggleClass('trans-rotate');
        //当屏幕滚动后行高变92，屏幕尺寸变小后，初始化行高
        $(".header-nav-a").css({
            "line-height": "40px"
        })
    }
};
//判断是否滚动离开顶部，若离开顶部则header加宽
let scroll = null;
window.onscroll = function(){
    let clientWidht = document.documentElement.clientWidth || document.body.clientWidth;
    //判断屏幕尺寸是否大于980，如果小于怎不操作
    if(clientWidht > 980){
        if(document.documentElement.scrollTop){
            scroll =  document.documentElement.scrollTop;
        }else if(document.body.scrollTop){
            scroll =  document.body.scrollTop;
        }

        if(scroll <= 20){
            $('header').css({
                "opacity": "0.8",
                "height": "46px"
            });
            $('.header-nav-a').css({
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
        }
    }
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


    /*点击菜单按钮下拉菜单*/
    dropDownMenu(){
        $('.header-nav').slideToggle(300);
        $('.header-menu').toggleClass('trans-rotate');
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
                            <a href='#' alt='' className='header-nav-a header-a'>OUR COMPANY</a>
                        </div>
                        <div className='header-nav-item header-nav-hover'>
                            <a href='#' alt='' className='header-nav-a header-a'>OUR WORK<span className='down-arrow'>&gt;</span></a>
                            <div className='drop-down'>
                                {dropDownMenus1}
                            </div>
                        </div>
                        <div className='header-nav-item header-nav-hover'>
                            <a href='#' alt='' className='header-nav-a header-a'>CASE STUDIES<span className='down-arrow'>&gt;</span></a>
                            <div className='drop-down'>
                                {dropDownMenus2}
                            </div>
                        </div>
                        <div className='header-nav-item'>
                            <a href='#' alt='' className='header-nav-a header-a'>CONTACT</a>
                        </div>
                    </nav>
                </div>
            </header>
        );

	}
}

export default Header;