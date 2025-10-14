import React, {useState} from "react";
import LogoutButton from "./LooutButton";
import LoginButton from "./LoginButton";
import Greeting from "../ex1/UserGreeting";

function LoginControl(){
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const handleLogInClick = ()=>{
        setIsLoggedIn(true)
    }

    const handleLoOutClick = ()=>{
        setIsLoggedIn(false)
    }
    let btn;

    if(isLoggedIn){
        btn = <LogoutButton onClick ={handleLoOutClick}/>
    }else{
        btn = <LoginButton onClick={handleLogInClick}/>
    }
    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    );
}

export default LoginControl;