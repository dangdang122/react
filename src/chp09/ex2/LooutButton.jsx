import React from "react";

function LogoutButton(props){
    return(
        <button onClick={props.onClick} style={{backgroundColor:'blue',color:'white'}}>로그아웃</button>
    );
}



export default LogoutButton;