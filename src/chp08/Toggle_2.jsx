import React from "react";
import button from "../chp04/Button";

class Toggle_2 extends React.Component{


    constructor(props){

        super(props);

        this.state = {isToggleOn: true}

        this.handleClick = this.handleClick.bind(this);



    }


    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        })  )
    }

    render() {
        return(

            <div align = "center" style={{margin: 200}}>
                {/*생성자에서 this 키워드를 사용하기위한 binding을 생략하려면*/}
                <button onClick ={()=>this.handleClick()}>
                    {this.state.isToggleOn ? "on" : "off"}

                </button>
            </div>

        );
    }
}
export default Toggle_2;