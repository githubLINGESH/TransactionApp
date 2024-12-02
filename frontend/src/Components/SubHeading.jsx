import React from 'react'

const SubHeading = ({title1,title2}) => {
  return (
    <div className='text-slate-600  p-2  flex flex-col  items-center '>
        <div>{title1}</div>
        <div>{title2}</div>
    </div>
  )
}

export default SubHeading