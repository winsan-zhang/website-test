import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/header.css';
import '../styles/common.css';
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
            <header>
                <div className='container'>
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