import React from 'react'
import AboutEcommerce from '../assets/images/about-ecommerce.jpg'
import { FaProductHunt, FaUserAlt } from 'react-icons/fa'
import { ImCheckboxChecked } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'

const About = () => {
  return (
    <div className='bg-green-50 min-h-screen py-16 md:px-16 lg:px-24'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-12 text-green-500'>About Us</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-center'>
            <div>
                <img src={AboutEcommerce} alt="about" className='rounded-xl shadow-lg'/>
            </div>
            
        <div>
            <h2 className='text-2xl font-semibold mb-4'>Welcome to e-Cart</h2>
            <p className='text-gray-600n mb-6'>eCart is a modern ecommerce platform where you can find
                high quality products at the best prices. We focus on
                delivering best customer experience and fast delivery services
            </p>
            <div className='grid grid-cols-4 gap-6 mt-6'>
                <div className='p-4 bg-white rounded-lg shadow'>
                    <div><FaProductHunt className='text-3xl text-green-500 mb-2'/></div>
                    <h3 className='font-semibold text-lg'>10K+</h3>
                    <p className='text-gray-500 text-sm'>Products</p>
                </div>
                <div className='p-4 bg-white rounded-lg shadow'>
                    <div><FaUserAlt className='text-3xl text-green-500 mb-2'/></div>
                    <h3 className='font-semibold text-lg'>5K+</h3>
                    <p className='text-gray-500 text-sm'>Happy Customers</p>
                </div>
                <div className='p-4 bg-white rounded-lg shadow'>
                    <div><ImCheckboxChecked className='text-3xl text-green-500 mb-2'/></div>
                    <h3 className='font-semibold text-lg'>100+</h3>
                    <p className='text-gray-500 text-sm'>Brands</p>
                </div>
                <div className='p-4 bg-white rounded-lg shadow'>
                    <div><BiSupport className='text-3xl text-green-500 mb-2'/></div>
                    <h3 className='font-semibold text-lg'>24/7</h3>
                    <p className='text-gray-500 text-sm'>Support</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About

