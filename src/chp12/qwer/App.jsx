import React from "react";
import './App.css';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="어서 오세요"
            message="우리 사이트에 방문하신 것을 환영합니다!"
        />
    );
}

function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>환영 대화 상자</h2>
            <WelcomeDialog />

            <hr />

            <h2>일반 대화 상자</h2>
            <Dialog
                title="알림"
                message="새로운 공지사항이 있습니다."
            />
        </div>
    );
}

export default App;