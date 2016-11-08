import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/common.css';
import '../styles/content-fifth-sec.css';

class ContentFifthSec extends React.Component{

    render(){
        return (

            <div className='content-fifth-sec'>
                <div className='container'>
                    <div className='center-table'>
                        <div className="content-sec-wrap">
                            <div className='center-table-cell'>
                                <h1 className='content-sec-title fifth-sec-title'>Webpack</h1>
                                <p className='content-sec-p fifth-sec-p'>webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、样式（含less/sass）、图片等都作为模块来使用和处理。可以引入各种模块，即使它们可能需要经过编译（比如JSX和sass），但我们无须在上面花费太多心思，因为 webpack 有着各种健全的加载器（loader）在默默处理这些事情。配合gulp更是前端自动化的利器。</p>
                                <button className='btn btn-view_shop'><a className="btn-a btn-a-view_shop" href="">详细内容<span className='right-arrow'>&gt;</span></a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContentFifthSec;