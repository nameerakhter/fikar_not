'use client'
import React from 'react'
import {useGSAP} from '@gsap/react'
import  gsap  from 'gsap'
import Image from 'next/image'

const Header = () => {
  useGSAP(()=>{
    gsap.from('.title',{
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 1
    })
  })
  return (
    <div className='flex items-center justify-center title text-[4rem] gap-[7rem]  mt-[5rem]'>
       {/* <h1 className='text-[3rem] font-[100] mt-[5rem] leading-[4rem] tracking-tight text-[#0ac4ff]'><p className='from-neutral-50'>Choose your blockchain</p><p>to get started</p></h1> */}
       <div className='leading-tight'>
        <p className='from-neutral-50 text-[3rem]'>Choose your blockchain</p>
        <p className='text-[#0ac4ff] text-[5rem] tracking-tight'>to get started :</p>
       </div>
       <Image src='/assets/hero_idea.png' width={500} height={500} alt='hero'></Image>
    </div>
  )
}

export default Header