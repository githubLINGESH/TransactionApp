import React from 'react'

const ButtonComponent = ({title,onClick}) => {
  return (
    <div className='p-2 pl-3'>
        <button type="button" onClick={onClick} className=" text-white bg-sky-900 hover:bg-sky-900 focus:ring-2 focus:ring-sky-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-sky-900 dark:hover:bg-sky-900 focus:outline-none dark:focus:ring-sky-900 w-full ">{title}</button>
    </div>
  )
}

export default ButtonComponent