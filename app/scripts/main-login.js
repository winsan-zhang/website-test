import React from "react";
import ReactDom from "react-dom";

import Header from "./header";
import Login from "./login";

class MainLogin extends React.Component{

    render(){

        return (
            <div className="main-login">
                <Header/>
                <Login/>
            </div>
        );
    }
}
ReactDom.render(
    <MainLogin/>,
    document.getElementById("container-login")
);