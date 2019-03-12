import React from "react";
import ReactDOM from "react-dom";

export default class Portal extends React.Component{
    constructor(){
        super();
        this.node = document.createElement("div");
        document.body.appendChild(this.node);
    }
    render(){
        let {children}=this.props;
        return children && ReactDOM.createPortal(children,this.node);
    }
}