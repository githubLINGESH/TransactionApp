import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Validation = () => {
    const navigate = useNavigate()
     async function validate(){
        try{
          const response = await axios({
            method:'get',
            url:'http://192.168.230.221:3000/api/v1/user/me',
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