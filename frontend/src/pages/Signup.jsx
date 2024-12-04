import React, { useState } from 'react'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputComponent from '../Components/InputComponent'
import ButtonComponent from '../Components/ButtonComponent'
import BottomWarningComponent from '../Components/BottomWarningComponent'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRef } from "react";

const Signup = () => {
    const url = import.meta.env.VITE_REACT_DEV_URL;
    let buttonRef = useRef(null);
    const navigate = useNavigate()
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  return (
    <div className='flex bg-kk-100 justify-center items-center h-screen '>
            <div  className='flex bg-gray-100  flex-col h-auto w-80 p-2 rounded-lg'>
                <div className='flex-col items-center'>
                    <Heading title={"Sign up"}/>
                    <SubHeading title1={"Enter your information to create an"}
                        title2={"account"}
                    />
                </div>
                <div>
                    <InputComponent labelInput={"First Name"} placeHolderInput={"John"} onChange={(e)=>{setFirstname(e.target.value)}}/>
                    <InputComponent labelInput={"Last Name"} placeHolderInput={"Doe"} onChange={(e)=>{setLastname(e.target.value)}}/>
                    <InputComponent labelInput={"Email"} placeHolderInput={"sharaan@gmail.com"} onChange={(e)=>{setEmail(e.target.value)}} />
                    <InputComponent labelInput={"Password"} placeHolderInput={"*******"} onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div>
                    <ButtonComponent title={"Sign up"} buttonRef = {buttonRef} onClick={async ()=>{
                        buttonRef.current.innerHTML = "LOADING"
                        try{
                            const response = await axios({
                                method:'post',
                                url:`${url}/api/v1/user/signup/`,
                                data:{
                                    firstname,
                                    lastname,
                                    username:email,
                                    password
                                }
                            })
                            localStorage.setItem("token",response.data.token)
                            navigate('/')
                        }  
                            catch(e){
                                buttonRef.current.textContent = "Sign up"
                                alert(e.response.data.message)
                            }
                        }
                    }
                    />
                    <BottomWarningComponent  title1={"Already have an account?"} title2={"Sign in"} to={"/signin"}/>
                </div>
            </div>
        </div>
  )
}

export default Signup