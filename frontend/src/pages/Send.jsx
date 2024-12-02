import React, { useState } from 'react'
import LetterIconComponent from '../Components/LetterIconComponent'
import InputComponent from '../Components/InputComponent'
import ButtonComponent from '../Components/ButtonComponent'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios'
const Send = () => {
  const url = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const [searchParams, setSearchParams] = useSearchParams();
  const firstname = searchParams.get('firstname')
  const lastname = searchParams.get('lastname')
  const id = searchParams.get('userId')
  const navigate = useNavigate()
  
  const [amount,setAmount] = useState('')

  async function transferAmount(){
    let status =''
    try{
    const response = await axios({
      method:'post',
      url:`${url}/api/v1/account/transfer`,
      data:{
        amount,
        to:id
      },
      headers:{
        'Authorization':"Bearer " + localStorage.getItem("token")
      }}
    )
      status = response.data.message
    }
    catch(e){
      status = e.response.data.message
    }
    navigate(`/status?status=${status}`)
  }

  return (
    <div className='flex bg-kk-100 justify-center items-center h-screen '>
        <div  className='flex bg-gray-100  flex-col h-auto w-80 p-2 rounded-lg'>
          <div className='m-8 flex justify-center font-bold text-2xl'>
            <div>Send money</div>
          </div>
          <div className='flex'>
            <div><LetterIconComponent firstname={firstname}/></div>
            <div className='mt-4'>
              <span>{firstname} {lastname}</span>
            </div>
          </div>
          <div>
            <InputComponent onChange={e=> setAmount(e.target.value)} labelInput={"Amount (in Rs)"} placeHolderInput={"Enter amount"}/>
          </div>
          <div>
            <ButtonComponent title={"Initiate transfer"} onClick={
              ()=>{transferAmount()}
            }/>
          </div>
        </div>
    </div>
  )
}

export default Send