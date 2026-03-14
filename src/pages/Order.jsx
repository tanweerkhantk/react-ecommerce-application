import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



const Order = ({order}) => {
    const navigate = useNavigate()
  return (
    <div className='container mx-auto py-8 px-4 md:mx-16 lg:px-24'>
      <h2 className='text-2xl font-semibold mb-4'>Thank you for your order</h2>
      <p>Your order has been placed successfully tou will recieve an email confirmation shortly</p>
        <div className='mt-6 p-5 border border-gray-300 rounded-lg bg-gray-100'>
            <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
            <p>Order Number: {order.orderNumber}</p>
            <div className='mt-4'>
                <h2 className='text-md font-semibold mb-2'>Shipping Information</h2>
                <p>{order.shippingInforamation.name}</p>
                <p>{order.shippingInforamation.address}</p>
                <p>{order.shippingInforamation.city}</p>
                <p>{order.shippingInforamation.code}</p>
            </div>
            <div className='mt-4'>
                <h3 className='text-md font-semibold mb-2'>Items Ordered</h3>
                {order.products.map(product => (
                    <div key={product.id} className='flex justify-between mt-2'>
                        <p>{product.name} X { product.quantity}</p>
                        <p>{product.price * product.quantity}</p>
                    </div>
                ))}
            </div>
            <div className='mt-4 flex justify-between'>
                <span>Total Price : </span>
                <span className='font-semibold'>{order.totalPrice.toFixed(2)}</span>
            </div>
            <div className='mt-6'>
                <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600 cursor-pointer'>Order Tracking</button>
                <button className='bg-red-600 text-white py-2 px-4 hover:bg-red-800 cursor-pointer ml-2'
                onClick={() => navigate('/')}>Continue Shopping</button>
            </div>
        </div>
    </div>
  )
}

export default Order
