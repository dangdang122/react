import React, {useState} from "react";

function ConfirmButtonFunction(){
    const [isConfirmed, setIsConfirmed] = useState();

    function handleConfirm(){
        setIsConfirmed((prevState)=> !prevState)
    }

    return(
        <div>
            ConfirmButton Test Function Type &nbsp;
            <button onClick = {handleConfirm} disabled = {isConfirmed}>{isConfirmed? "Confirmed":"Check"}</button>
        </div>
    );
}

export default ConfirmButtonFunction;