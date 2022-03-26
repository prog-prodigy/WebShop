import React, { useState } from "react";
import Form from "./Form";
import {authfirebase} from '../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";


const Login = (props) => {
 const [email,setEmail] =  useState()
 const [password,setPassword] =  useState()
const dispatch = useDispatch()
const login= async({email,password})=>{
  setEmail(email)
 setPassword(password)
try{
   const user = await signInWithEmailAndPassword(authfirebase, email, password)
   console.log('success')
   dispatch(authActions.login())
 }catch(error){
   console.log(error)
 }
}


  return (
    <>
     <Form  login={login} changeForm={props.changeForm}/>
    </>
  );
};

export default Login;
