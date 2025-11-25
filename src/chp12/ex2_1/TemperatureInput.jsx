import React from "react";
import './Calculator.css';
const scaleNames = {
    c: "섭씨",
    f: "화씨"
}

function TemperatureInput(props){
    const handleChange=(event)=>{
        props.onTemperatureChange(event.target.value);
    };

    const { scale, temperature } = props;

    return(
        <fieldset className={`temperature-input-container scale-${scale}`}>
            <legend className="temperature-label">온도를 입력하세요. (단위: {scaleNames[scale]}) </legend>
            <input
                className="temperature-input"
                type="text"
                value={temperature}
                onChange={handleChange}
            />
        </fieldset>
    )
}

export default TemperatureInput;