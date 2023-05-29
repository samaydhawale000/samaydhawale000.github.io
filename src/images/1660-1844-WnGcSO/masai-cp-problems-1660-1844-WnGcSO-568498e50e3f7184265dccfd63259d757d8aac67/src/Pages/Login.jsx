import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postLogin } from "../Redux/AuthReducer/action";

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleClick = ()=>{
    let dataObj={
      email,
      password
    }
    dispatch(postLogin(dataObj))
  }

  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleClick}>Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
