import React from 'react'
import {Atom} from "react-loading-indicators"
const LoadingIcon = () => {
  return (
    <div className=''>
    <div className='flex items-center justify-center bg-gray-300 h-screen'>
        <Atom color="#3135cc" size="medium" text="" textColor="" /> 
    </div>
    </div>
  )
}

export default LoadingIcon