import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(true)
    const [paymentToggle, setPaymentToggle] = useState(true)
    const [paymentMethod, setPaymentMethod] = useState('cod')
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        code: ''
    })

    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()

    const handleOrder = () =>{
        const newOrder = {
            products: cart.products,
            orderNumber : "12345",
            shippingInforamation: shippingInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }

  return (
     <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
         
            <h3 className='text-2xl font-semibold mb-4'>Check Out</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>

                {/* billing */}
                    <div className='border border-gray-300 p-2 mb-6'>
                        <div className='flex items-center justify-between cursor-pointer'
                        onClick={() => setBillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                           { billingToggle ? <FaAngleDown /> : <FaAngleUp /> }
                        </div>
                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Name</label>
                                <input type="text" 
                                name='name'
                                placeholder='Enter Name'
                                className='w-full px-3 py-2 border border-gray-300'/>
                            </div>
                            <div>
                                <label className='block text-gray-700'>Email</label>
                                <input type="email" 
                                name='email'
                                placeholder='Enter Email'
                                className='w-full px-3 py-2 border border-gray-300'/>
                            </div>
                            <div>
                                <label className='block text-gray-700'>Phone</label>
                                <input type="text" 
                                name='phone'
                                placeholder='Enter Phone Number'
                                className='w-full px-3 py-2 border border-gray-300'/>
                            </div>
                            
                        </div>
                    </div>

                    {/* shipping */}

                    <div className='border border-gray-300 p-2 mb-6'>
                        <div className='flex items-center justify-between cursor-pointer'
                        onClick={() => setShippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                           { shippingToggle ? <FaAngleDown /> : <FaAngleUp /> }
                        </div>
                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700'>Address</label>
                                <input type="text" 
                                name='address'
                                placeholder='Enter Address'
                                className='w-full px-3 py-2 border border-gray-300'
                                onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}/>
                            </div>
                            <div>
                                <label className='block text-gray-700'>City</label>
                                <input type="text" 
                                name='city'
                                placeholder='Enter City'
                                className='w-full px-3 py-2 border border-gray-300'
                                onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}/>
                            </div>
                            <div>
                                <label className='block text-gray-700'>Code</label>
                                <input type="text" 
                                name='code'
                                placeholder='Enter City Code'
                                className='w-full px-3 py-2 border border-gray-300'
                                onChange={(e) => setShippingInfo({...shippingInfo, code: e.target.value})}/>
                            </div>
                            
                        </div>
                    </div>

                    {/* payment */}

                    <div className='border border-gray-300 p-2 mb-6'>
                        <div className='flex items-center justify-between cursor-pointer'
                        onClick={() => setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                           { paymentToggle ? <FaAngleDown /> : <FaAngleUp /> }
                        </div>
                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input type="radio" 
                                name='payment'
                                checked = {paymentMethod === 'cod'}
                                onChange={() => setPaymentMethod('cod')}
                                className='mr-2 cursor-pointer'
                                />
                                <label className='block text-gray-700 cursor-pointer'> Cash on Delivery</label>
                            </div>
                            
                            <div className='flex items-center mb-2'>
                                <input type="radio" 
                                name='payment'
                                checked = {paymentMethod === 'dc'}
                                onChange={() => setPaymentMethod('dc')}
                                className='mr-2 cursor-pointer'
                                />
                                <label className='block text-gray-700 cursor-pointer'>Debit Card</label>
                            </div>
                            {paymentMethod === "dc" && (
                                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                   <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                                   <div className='mb-4'>
                                    <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                                    <input type="text" 
                                    placeholder='Enter card number'
                                    className='border border-gray-300 p-2 w-full rounded bg-white'
                                    required/>
                                   </div>
                                   <div className='mb-4'>
                                    <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                                    <input type="text" 
                                    placeholder='Enter card holder name'
                                    className='border border-gray-300 p-2 w-full rounded bg-white'
                                    required/>
                                   </div>
                                   <div className='flex justify-between mb-4'>
                                    <div className='w-1/2 mr-2'>
                                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Valid Date</label>
                                        <input type="text" 
                                        placeholder='MM/YY'
                                        className='border border-gray-300 p-2 w-full rounded bg-white'/>
                                    </div>
                                    <div className='w-1/2 mr-2'>
                                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>CVV</label>
                                        <input type="text" 
                                        placeholder='CVV'
                                        className='border border-gray-300 p-2 w-full rounded bg-white'/>
                                    </div>
                                   </div>
                                </div>
                            )}
                        </div>
                        {/* {paymentMethod} */}
                    </div>

                </div>
                
                    <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-gray-300'>
                        
                        <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                        <div className='space-y-4'>
                            {cart.products.map((product) => (
                                <div key={product.id} className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <img src={product.image} alt={product.name} 
                                        className='w-16 h-16 object-contain rounded'/>
                                        <div className='ml-4'>
                                            <h4 className='text-md font-semibold'>{product.name}</h4>
                                            <p className='text-green-800'>
                                                &{product.price} * {product.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='mt-4 border-t border-gray-300 pt-4'>
                            <div className='flex justify-between'>
                                <span>Total Price : </span>
                                <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className='w-full bg-green-600 text-white py-4 mt-6 hover:bg-green-800 
                        cursor-pointer' onClick={handleOrder}>Place Order</button>
                        
                    </div>
                </div>
              
            </div>
          
  )
}

export default Checkout
