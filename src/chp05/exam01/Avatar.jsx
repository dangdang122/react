import React from "react";
import './Avatar.css';
import UserInfo from "./UserInfo";

function Avatar(props){
    return(
        <img
            className = "avatar"
            src={props.user.avatarUrl}
        />
    );
}

export default Avatar;