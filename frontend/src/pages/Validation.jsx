import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Validation = () => {
  const url = import.meta.env.VITE_REACT_APP_BACKEND_URL;

    const navigate = useNavigate()
    navigate('/loading')
     async function validate(){
        try{
          const response = await axios({
            method:'get',
            url:`${url}/api/v1/user/me`,
            headers:{
              'Authorization':'Bearer '+localStorage.getItem('token')
            }
          })
        navigate('/dashboard')
      }
        catch(e){
          navigate('/signup')
          console.log(e.response.data.message)
          
        }
    }
    validate()
  return (
    <div>

    </div>
  )
}

export default Validation