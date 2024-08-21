'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import {useGSAP} from '@gsap/react'
import  gsap  from 'gsap'

const Navbar = () => {
  useGSAP(()=>{
    gsap.from('.logo', { rotate: 360,duration: 1, y: -10, opacity: 0})
    gsap.from('.link', {duration: .8, y: -30, opacity: 0, stagger:.1})

  })
  return (
    <div className=' h-[4rem]  rounded-xl navbar text-[#bababa]'>
      <div className='flex items-center justify-evenly gap-[4rem] text-xl p-[1rem]'>
        <div className='logo'>
          <Image
            src='/assets/logo.png'
            width={40}
            height={40}
            alt='logo'
          />

        </div>
        <div className='flex items-center justify-center gap-7'>
        <a className='link' href="">Buy/Sell</a>
        <a className='link' href="">Grow</a>
        <a className='link' href="">Markets</a>
        <a className='link' href="">Business</a>
        <a className='link' href="">Support</a>
        </div>
        
        <Button className=' text-[#bababa] leading-tight text-xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500'>View Source code</Button>
      </div>

    </div>
  )
}

export default Navbar