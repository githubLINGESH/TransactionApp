import React from 'react'

const LetterIconComponent = ({firstname}) => {
  return (
    <div className='rounded-full bg-kk-100 w-10 h-10 flex justify-center items-center m-2'>
        <div>{firstname.charAt(0).toUpperCase()}</div>
    </div>
  )
}

export default LetterIconComponent