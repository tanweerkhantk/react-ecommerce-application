import React, { useState } from 'react'

const UpdateAddress = ({setAddress, setIsModelOpen}) => {
    const [newAddress, setNewAddress] = useState("")
    const onClose = () =>{
        setAddress(newAddress)
        setIsModelOpen(false)
    }
  return (
    <div>
      <input type="text"
      placeholder='Enter new address'
      className='border border-gray-300 rounded-xl p-2 w-full mb-4'
      onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className='flex justify-end'>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mt-2 mr-2 cursor-pointer'
        onClick={() => setIsModelOpen(false)}>
            Cancel</button>
        <button className='bg-green-500 text-white py-2 px-4 rounded mt-2 cursor-pointer'
        onClick={onClose}>Save Address</button>
      </div>
    </div>
  )
}

export default UpdateAddress
