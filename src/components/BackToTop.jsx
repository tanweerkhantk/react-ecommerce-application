import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 300){
                setShowButton(true)
            }else {
                setShowButton(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[])

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} 
        className='fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white
        p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer'>
            <FaArrowUp/>
        </button>
      )}
    </div>
  )
}

export default BackToTop
