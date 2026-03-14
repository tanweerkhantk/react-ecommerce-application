import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Order from './pages/Order'
import FilterData from './pages/FilterData'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import BackToTop from './components/BackToTop'

function App() {

  const [order, setOrder] = useState(null)


  return (
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout setOrder={setOrder} />}></Route>
        <Route path='/order-confirmation' element={<Order order={order} />}></Route>
        <Route path='/filter-data' element={<FilterData />}></Route>
        <Route path='/product/:id' element={<ProductDetail />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    <BackToTop />
    </div>
  )
}

export default App
