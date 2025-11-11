import React, {useState} from "react";
import './Reservation.css';

function Reservation(){
    const[haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`아침식사여부: ${haveBreakfast}, 방문객수: ${numberOfGuest}`)
    }

    return(
        <form onSubmit={handleSubmit} className="Reservation-form">
            <label>
                아침식사 여부:
                <input type = {"checkbox"} checked = {haveBreakfast} onChange={(event)=>{
                    setHaveBreakfast(event.target.checked)
                }}/>
            </label>
            <br/>
            <label>
                방문객 수:
                <input type={"number"} value={numberOfGuest} onChange={(event)=>{
                    const value = event.target.value;
                    if (value === '' || !isNaN(value)) {
                        setNumberOfGuest(value)
                    }
                }}/>
            </label>
            <br/>
            <button type = {"submit"}>제출</button>
        </form>
    )
}

export default Reservation;