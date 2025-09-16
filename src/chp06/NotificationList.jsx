import React from "react";

const reservedNotifications=[{
    id:1,
    message:"안녕하세요"
    },
    {
        id:2,
        message:"반갑습니다"
    }
]

class NotificationList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notifications:[]
        }
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }

    render(){
        return(
            <div>

            </div>
        );
    }
}

export default NotificationList;