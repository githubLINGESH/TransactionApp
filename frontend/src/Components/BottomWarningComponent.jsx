import React from 'react'
import {Link} from 'react-router-dom'
const BottomWarningComponent = ({title1,title2,to}) => {
  return (
    <div className='flex justify-center items-stretch'>
        <div className='pr-2'>{title1}</div>
        <div className='underline hover:cursor-pointer font-medium' ><Link to={to}>{title2}</Link></div>
    </div>
  )
}

export default BottomWarningComponent