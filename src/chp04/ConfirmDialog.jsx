import React from "react";
import Button from "./Button";

function ConfirmDialog(props){
    return(

        <div className = 'div-bg-ivory'>
            <h1>aisw</h1>
            <br/>
            <Button color = 'green'>확인</Button>&nbsp;
            <Button color = 'blue'>취소</Button>&nbsp;
            <Button color = 'red'>초기화</Button>&nbsp;
        </div>
    )
}

export default ConfirmDialog;