import React from "react";

import './DriverCard.css';

import Lewis from "./Lewis.jpg";
import Max from "./max.jpg";
import Charles from "./Charles.jpg";

const drivers = [
    {
        id: 1, name: "막스 베르스타펜", team: "레드불 레이싱", number: 1, avatar: Max, title: "월드 챔피언",
    },
    {
        id: 2, name: "샤를 르클레르", team: "스쿠데리아 페라리", number: 16, avatar: Charles, title: "모나코 왕자",
    },
    {
        id: 3, name: "루이스 해밀턴", team: "메르세데스-AMG", number: 44, avatar: Lewis, title: "7회 챔피언",
    },
];

function DriverCard(){
    return(
        <div className={"driver-container"}>
            <h2>F1 드라이버 명단</h2>
            <div className={"card-container"}>
                {
                    drivers.map((driver)=>(
                            <div key={driver.id} className={"driver-card"}>
                                <img
                                    src={driver.avatar}
                                    alt={driver.name}
                                    className={"driver-avatar"}
                                />
                                <div className={"driver-info"}>
                                    <h3>{driver.name}</h3>
                                    <p>{driver.team} - No.{driver.number}</p>
                                    <span className={"driver-title"}>{driver.title}</span>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default DriverCard;