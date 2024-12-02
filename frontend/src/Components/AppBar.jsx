import React from 'react'
import LetterIconComponent from './LetterIconComponent'

const AppBar = ({firstname,lastname,id}) => {
  return (
    <div className='flex justify-between border-solid border-2 border-gray-200 rounded-lg font-medium  m-5 '>
        <div className='mt-4'>
            PayTM App
        </div>
        <div className='flex'>
            <div className='mt-4 font-medium pr-2'>Hello</div>
            <LetterIconComponent firstname={firstname}/>
        </div>
    </div>
  )
}

export default AppBar