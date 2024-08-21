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
    <div className='flex items-center justify-center title text-[4rem] gap-[7rem]  mt-[7rem] mb-[3rem] px-[2rem]'>
       <div className='border h-[40rem] rounded-xl'></div>
       <section className='w-1/2  px-[3rem] flex flex-col items-center'>
       <div className='leading-tight'>
        <p className='from-neutral-50 text-[3rem]'>Choose your blockchain</p>
        <p className='text-[#0ac4ff] text-[5rem] tracking-tight'>to get started :</p>
       </div></section>
       <section className='w-1/2 flex items-center'>
       <Image src='/assets/hero_idea.png' width={500} height={500} alt='hero'></Image>

       </section>
    </div>
  )
}

export default Header