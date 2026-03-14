import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
      <form>
        <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300" placeholder='Enter name'/>
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input type="email" className="w-full px-3 py-2 border border-gray-300" placeholder='Enter email'/>
        </div>
        <div className='mb-2'>
            <label className='block text-gray-700'>Password</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300" placeholder='Enter password'/>
        </div>
        
        <div className='mb-4'>
            <button className='w-full bg-green-600 text-white py-2 cursor-pointer'>Sign Up</button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Already have an Account</span>
        <button className='text-green-800 cursor-pointer ml-2 hover:underline' onClick={openLogin}>Login</button>
      </div>
    </div>
  )
}

export default Register
