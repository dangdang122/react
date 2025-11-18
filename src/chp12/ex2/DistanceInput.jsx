import React from "react";
import './DistanceConverter.css';

const unitNames = {
    km: "킬로미터",
    mile: "마일"
};

function DistanceInput(props) {
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
    };

    return (
        <div className="distance-input">
            <label className="distance-label">
                {unitNames[props.unit]} 입력
            </label>

            <input
                type="text"
                className="distance-field"
                value={props.distance}
                placeholder={`${unitNames[props.unit]}를 입력하세요.`}
                onChange={handleChange}
            />
        </div>
    );
}

export default DistanceInput;
