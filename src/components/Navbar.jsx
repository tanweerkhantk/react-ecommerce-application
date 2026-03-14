import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Links, NavLink, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/productSlice'


export default function Navbar() {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [search, setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = (e) =>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }

  const openSignUp = () => {
    setIsLogin(false)
    setIsModelOpen(true)
  }
  const openLogin = () => {
    setIsLogin(true)
    setIsModelOpen(true)
  } 

  const products = useSelector(state => state.cart.products)
  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold text-green-500'>
            <Link to="/">e-Cart</Link>
        </div>
        <div className='relative flex-1 mx-4'>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Search Product'
                className='w-full border py-2 px-4 border-green-400 rounded focus:outline-none
                focus:ring-2 focus:ring-green-500' onChange={(e) => setSearch(e.target.value) } />
                <FaSearch className='absolute top-3 right-3 text-green-500'></FaSearch>
            </form>
        </div>
        <div className='flex items-center space-x-4'>
            <Link to="/cart" className='relative'>
                <FaShoppingCart className='text-lg' />
                {products.length > 0 && (
                  <span className='absolute top-0 right-0 text-xs w-3 left-3 bg-green-500 rounded-full flex justify-center 
                  items-center text-white'>
                    {products.length}
                  </span>
                )}
            </Link>
            <button className='hidden md:block cursor-pointer'
            onClick={() => setIsModelOpen(true)}> Login | Register</button>
            <button className='block md:hidden'><FaUser /></button>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
        {/* <Link to="/" className='hover:underline'>Home</Link>
        <Link to="/shop" className='hover:underline'>Shop</Link>
        <Link to="/about" className='hover:underline'>About</Link>
        <Link to="/contact" className='hover:underline'>Contact</Link> */}
        <NavLink 
        to="/"
        className={({isActive}) =>
        isActive ? "text-green-600 border-b-2 border-green-600 pb-1" : "hover:underline"}>
          Home
        </NavLink>
         <NavLink 
        to="/about"
        className={({isActive}) =>
        isActive ? "text-green-600 border-b-2 border-green-600 pb-1" : "hover:underline"}>
          About
        </NavLink>
         <NavLink 
        to="/shop"
        className={({isActive}) =>
        isActive ? "text-green-600 border-b-2 border-green-600 pb-1" : "hover:underline"}>
          Shop
        </NavLink>
         <NavLink 
        to="/contact"
        className={({isActive}) =>
        isActive ? "text-green-600 border-b-2 border-green-600 pb-1" : "hover:underline"}>
          Contact
        </NavLink>
      </div>
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
      </Modal>
    </nav> 
  )
}
