import React from "react";
import '../ex2_1/Calculator.css';
function BoilVerdict(props){
    const { celsius } = props;

    if (Number.isNaN(celsius)) {
        return <p className="boil-verdict-container">유효한 숫자를 입력하세요.</p>;
    }

    if(celsius >= 100)
        return <p className="boil-verdict-container boil-verdict-boils">물이 끓습니다.</p>

    return <p className="boil-verdict-container boil-verdict-does-not-boil">물이 끓지 않습니다</p>
}

export default BoilVerdict;