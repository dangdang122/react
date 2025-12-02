import {useContext} from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    // useContext hook 선언
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <div style={{
            width: "100vw",
            height: "100vh",
            padding: "2.5rem",
            backgroundColor: theme == "light" ? "white" : "black",
            color: theme== "light" ? "black": "white"
        }}>
            <p style={{padding: "10px"}}>현재 이 페이지는 Dark 또는 Light 테마로 변경가능합니다.</p>
            <button onClick={toggleTheme} style={{margin: "10px"}}>테마 변경</button>
        </div>
    );

}

export default MainContent;