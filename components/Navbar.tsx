import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-[4rem]  rounded-xl'>
        <div className='flex items-center justify-center gap-[4rem] text-xl p-[1rem]'>
        <Image src='/assets/logo.png' width={30} height={30} alt='logo'/>
        <a href="">Buy/Sell</a>
        <a href="">Grow</a>
        <a href="">Markets</a>
        <a href="">Business</a>
        <a href="">Support</a>
        </div>
        
    </div>
  )
}

export default Navbar