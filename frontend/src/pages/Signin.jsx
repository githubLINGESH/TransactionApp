import React, { useState } from "react";
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputComponent from '../Components/InputComponent'
import ButtonComponent from '../Components/ButtonComponent'
import BottomWarningComponent from '../Components/BottomWarningComponent'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const url = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (

      <div className="flex bg-kk-100 justify-center items-center h-screen ">
        <div className="flex bg-gray-100  flex-col h-auto w-80 p-2 rounded-lg">
          <Heading title={"Sign in"}/>
          <SubHeading title1={"Enter your credentials to access"}
            title2={"your account"}
          />
          <InputComponent onChange={(e)=>{setEmail(e.target.value)}} labelInput={"Email"} placeHolderInput={"sharaan@gmail.com"}/>
          <InputComponent onChange={(e)=>{setPassword(e.target.value)}} labelInput={"Password"} placeHolderInput={"*******  "}/>
          <ButtonComponent title="Sign in" onClick={
            async ()=>{
             try{
              const response = await axios({
                method:"post",
                url:`${url}/api/v1/user/signin`,
                data:{
              username:email,
              password
            }})
            localStorage.setItem("token",response.data.token)
            navigate('/')
          }
            catch(e){
              alert(e.response.data.message)
              console.log(e.response.data)
            }
            }
          }/>
          <BottomWarningComponent title1={"Don't have an account?"} title2={"Sign up"} to={"/signup"}/>
        </div>
    </div>
  );
};

export default Signin;
