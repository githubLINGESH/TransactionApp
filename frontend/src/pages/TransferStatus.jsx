import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import ButtonComponent from '../Components/ButtonComponent';

const TransferStatus = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const status = searchParams.get('status')
    const navigate = useNavigate()
  return (
    <div className="flex bg-kk-100 justify-center items-center h-screen ">
        <div className="flex bg-gray-100  flex-col h-80 w-80 p-2 rounded-lg items-center justify-center ">
            <div className='bold font-bold uppercase text-xl font-mono italic text-gray-100 bg-slate-700 rounded-lg'> 
             {status}  
            </div>
            <ButtonComponent title={"Back-<"} onClick={()=>{navigate('/dashboard')}}/>
        </div>
    </div>
  )
}

export default TransferStatus