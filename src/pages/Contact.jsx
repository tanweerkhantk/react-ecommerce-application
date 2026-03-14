import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='bg-green-100 min-h-screen py-16 px-6 md:px-16 lg:px-24'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-12 text-green-500'>Contact Us </h1>
        <div className='grid md:grid-cols-2 gap-10'>
            <div>
            <h2 className='text-2xl font-semibold mb-6'>Get in Touch</h2>
            <p className='text-gray-600 mb-6'>Have questions about our products or services?
                Feel free to contact us anytime.
            </p>
            <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                    <span className='text-green-600 text-xl'><FaMapLocation/></span>
                    <p>Mumbai, Maharashtra</p>
                </div>
                <div className='flex items-center gap-3'>
                    <span className='text-green-600 text-xl'><FaEnvelope/></span>
                    <p>support@ecart.com</p>
                </div>
                <div className='flex items-center gap-3'>
                    <span className='text-green-600 text-xl'><FaPhone/></span>
                    <p>9619174132</p>
                </div>
            </div>
            </div>

            {/* contact form */}
          <div className='bg-white p-8 rounded-xl shadow-lg'>
            <form className="space-y-4">
                <input type="text"
                placeholder='Your name' 
                className='w-full border p-3 border-gray-300 rounded focus:outline-none
                focus:ring-2 focus:ring-green-500'/>
                <input type="email"
                placeholder='Your email' 
                className='w-full border p-3 border-gray-300 rounded focus:outline-none
                focus:ring-2 focus:ring-green-500'/>
                <textarea rows="5"
                placeholder='Your message' 
                className='w-full border p-3 border-gray-300 rounded focus:outline-none
                focus:ring-2 focus:ring-green-500'></textarea>
                <button className='w-full bg-green-600 text-white py-3 rounded hover:bg-green-700
                transition cursor-pointer'>Send Message</button>
            </form>   
         </div>  
        </div>

        {/* map */}
        <div className='mt-16'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241318.22867176824!2d72.71354061439699!3d19.081434215789436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1773515198247!5m2!1sen!2sin" 
            className='w-full h-80 rounded-xl shadow'></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
