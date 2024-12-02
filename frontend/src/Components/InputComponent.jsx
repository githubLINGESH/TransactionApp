import React from 'react'

const InputComponent = ({labelInput,placeHolderInput, onChange}) => {
  return (
    <div className='p-2 pl-3 font-medium'>
        <label>
            {labelInput}
        </label>
        <br/>
        <input type='text' onChange={onChange}placeholder={placeHolderInput} className='w-full p-1'>
        </input>
    </div>
  )
}

export default InputComponent