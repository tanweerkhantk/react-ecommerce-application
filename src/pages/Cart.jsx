import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '../assets/images/empty-cart.png'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import UpdateAddress from '../components/UpdateAddress'
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/cartSlice'




const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [address, setAddress] = useState('Main Street, 4230')
    const [isModelOpen, setIsModelOpen] = useState(false)
    const dispatch = useDispatch()
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      { cart.products.length > 0 ?
      <div>
        <h3 className='text-2xl font-semibold mb-4'>Shopping Cart</h3>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
            <div className='md:w-2/3'>
                <div className='flex justify-between border-b border-gray-300 items-center mb-4 text-xs font-bold'>
                    <p>Products</p>
                    <div className='flex space-x-8'>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Sub Total</p>
                        <p>Remove</p>
                    </div>
                </div>
                <div>
                    {cart.products.map((product) => (
                        <div key={product.id}
                        className='flex items-center justify-between p-3 border-gray-300 border-b'>
                            <div className='md:flex items-center space-x-4'>
                                <img src={product.image} 
                                alt={product.name} 
                                className='w-16 h-16 object-contain rounded'/>
                                <div className='flex-1 ml-4'>
                                    <h3 className='text-lg font-semibold'>{product.name}</h3>
                                </div>
                            </div>
                            <div className='flex space-x-12 items-center'>
                                <p>${product.price}</p>
                                <div className='flex items-center justify-center border border-gray-300'>
                                    <button className='text-xl font-bold px-2 border-r border-gray-300 cursor-pointer'
                                    onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
                                    <p className='text-xl px-2'>{product.quantity}</p>
                                    <button className='text-xl px-1 border-l border-gray-300 cursor-pointer'
                                    onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                                </div>
                                <p>${(product.quantity * product.price).toFixed(2)}</p>
                                <button className='text-red-500 hover:text-red-800 cursor-pointer'
                                onClick={() => dispatch(removeFromCart(product.id))}>
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-gray-300'>
                    <h3 className='text-sm font-semibold mb-5'>Cart Total</h3>
                    <div className='flex justify-between mb-5 border-b border-gray-300 pb-1'>
                        <span className='text-sm'>Total Items</span>
                        <span>{cart.totalQuantity}</span>
                    </div>
                    <div className='mb-4 border-b border-gray-200 pb-2'>
                        <p>Shipping :</p>
                        <p className='ml-2'>Shipping to {" "}</p>
                        <span className='text-xs font-bold'>{address}</span>
                        <button className='text-green-500 hover:underline mt-1 ml-2 
                        cursor-pointer' onClick={() =>setIsModelOpen(true)}>Update Address</button>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <span>Total Price : </span>
                        <span>${cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <button className='w-full bg-green-600 text-white py-2 hover:bg-green-800 cursor-pointer'>
                        Proceed to checkout</button>
                </div>
            </div>
            <Modal isModelOpen={isModelOpen}
            setIsModelOpen = {setIsModelOpen}>
                <UpdateAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>
            </Modal>
        </div>
      
    :
    <div className='flex justify-center'>
        <img src={EmptyCart} className='h-96'/>
    </div>
    }
    </div>
  )
}

export default Cart
