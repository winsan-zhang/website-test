import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/common.css';
import '../styles/content-second-sec.css'

class ContentSecondSec extends React.Component{

    render(){
        return (
            <div className='content-second-sec'>
                <div className='container '>
                    <div className='content-second-wrap clearfix'>
                        <div className='content-second-item'>
                            <div className='content-second-icon'><img src={require('../images/casestudy-blurb-icons-06.svg')} alt=""/></div>
                            <div className='content-second-text'>
                                <h4 className='content-second-title'>ECMAScript 6</h4>
                                ECMAScript 6.0（以下简称ES6）是JavaScript语言的下一代标准，已经在2015年6月正式发布了。它的目标，是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。
                            </div>
                        </div>
                        <div className='content-second-item'>
                            <div className='content-second-icon'><img src={require('../images/casestudy-blurb-icons-08.svg')} alt=""/></div>
                            <div className='content-second-text'>
                                <h4 className='content-second-title'>前端工程化</h4>
                                引入完整的前端工程化流程，实现了scss编译，css压缩，js压缩，html压缩，文件Hash，自动发布等工作，简化了工作，提高了发布速度，避免了人工操作的出错可能性。
                            </div>
                        </div>
                        <div className='content-second-item'>
                            <div className='content-second-icon'><img src={require('../images/casestudy-blurb-icons-05.svg')} alt=""/></div>
                            <div className='content-second-text'>
                                <h4 className='content-second-title'>响应式布局</h4>
                                真正的响应式设计方法不仅仅是根据可视区域大小而改变网页布局，而是要从整体上颠覆当前网页的设计方法，是针对任意设备的网页内容进行完美布局的一种显示机制。
                            </div>
                        </div>
                        <div className='content-second-item'>
                            <div className='content-second-icon'><img src={require('../images/casestudy-blurb-icons-07.svg')} alt=""/></div>
                            <div className='content-second-text'>
                                <h4 className='content-second-title'>前后端分离</h4>
                                前后端通过规定的接口来进行数据通信，前端的静态内容和后端的动态计算分别开发，分别部署。后端专注做业务逻辑，前端负责页面渲染。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContentSecondSec;