import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

const MAX_Counst =10;
function Accomodate(props){
    const[isFull,setIsFull]=useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0); //Custom useState 사용

    useEffect(()=>{
        console.log("==============");
        console.log("useEffect() isFull is called.");
        console.log(`isFull: ${isFull}`);
    })
    useEffect(()=>{
        setIsFull(count>=MAX_Counst)
        console.log(`Current count value: ${count}`)
    }, [count]);

    return(
        <div style={{padding:20}}>
            <p>{`총 ${count}명을 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled = {isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color:"red"}}>수용 할 수 있는 정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accomodate;