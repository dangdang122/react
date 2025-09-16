import React from "react";

class Notification extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div classNmae = {"wrapper"}>
                <span className={"messageText"}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;