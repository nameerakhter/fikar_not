'use client';
import React from 'react'
import Btc from './Links/Btc';
import Eth from './Links/Eth';
import Sol from './Links/Sol';
import BtcForm from './forms/BtcForm';


const Wallet = () => {
  return (
    <>
      <div className="h-[30rem] full rounded-xl top-[3rem] flex  items-center justify-center gap-[4rem] mt-[1rem] ">
        <Sol />
        <Btc />
        <Eth />
      </div>
    </>
  )
}

export default Wallet