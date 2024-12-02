import React from 'react'

const BalanceComponent = ({balance}) => {
  return (
    <div className='m-5 font-bold'>
        <span>Your balance Rs {balance}</span>
    </div>
  )
}

export default BalanceComponent