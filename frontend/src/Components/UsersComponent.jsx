import React from 'react'
import UserRender from './UserRender'

const UsersComponent = ({users,setSearch}) => {
  return (
    <div className='flex flex-col m-5'>
        <div className='m-2 mb-0 font-bold'>
            Users
        </div>
        <div className='w-full m-2'>
            <input type='text' onChange = {e=>setSearch(e.target.value)} placeholder='Search users...' className='w-full rounded-lg border-solid border-2 border-gray-200'></input>
        </div>
        <div className='m-2 ml-0 '>
            {
                
                users.map(user => {
                    return <UserRender firstname={user.firstname} 
                        lastname={user.lastname}
                        id={user._id}
                    />
                })
            }
        </div>
    </div>
  )
}

export default UsersComponent