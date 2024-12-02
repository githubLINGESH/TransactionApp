import React from 'react'
import '../App.css'
const Heading = ({title}) => {
  return (
    <>
        <div className='text-4xl font-bold pt-4 pb-2 px-2 flex justify-center'>
                   <div>{title}</div>
        </div>
    </>
  )
}

export default Heading