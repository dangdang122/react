import React, {useState} from "react";
import './SignUp.css';

function SignUp(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[gender,setGender]=useState("여성");
    const[interests,setInterests]=useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`성명: ${name}
               이메일: ${email}
               비밀번호 ${password}
               성별: ${gender}
               관심사: ${interests}`)
    };

    return(
        <div className="SignUp-container">
            <h2>회원 가입</h2>
            <form onSubmit = {handleSubmit}>
                <label>
                    성명:
                    <input type = {"text"} value={name} onChange ={(event)=>{
                        setName(event.target.value);
                    }} required/>
                </label>
                <label>
                    이메일:
                    <input type = {"text"} value={email} onChange ={(event)=>{
                        setEmail(event.target.value);
                    }} required/>
                </label>
                <label>
                    비밀번호:
                    <input type = {"password"} value={password} onChange ={(event)=>{
                        setPassword(event.target.value);
                    }} required/>
                </label>
                <label>
                    성별:
                    <select value={gender} onChange={(event)=>{setGender(event.target.value)}}>
                        <option>남성</option>
                        <option>여성</option>
                        <option>기타</option>
                    </select>
                </label>
                <label>
                    관심사:
                    <textarea value={interests} onChange={(event)=>{
                        setInterests(event.target.value);
                    }}/>
                </label>
                <button type={"submit"}>가입하기</button>
            </form>
        </div>
    );
}

export default SignUp;