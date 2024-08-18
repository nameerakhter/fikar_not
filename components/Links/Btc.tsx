import React from 'react'
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { CanvasRevealEffect } from '../ui/canvas-reveal-effect';
import Link from 'next/link';


const Btc = () => {
  return (
    <Link href='/btc'>
    <Card
    title="Bitcoin"
    className="h-[20rem] w-[20rem] rounded-full border-0 relative overflow-hidden flex items-center justify-center bg-transparent"
  >
    <div className="relative h-full w-full flex items-center justify-center group">
      
      <Image
        src="/assets/btc.png"
        alt="solana"
        width={200}
        height={200}
        className="bg-cover z-10"
      />
      <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="absolute inset-0 bg-emerald-900 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
      />
    </div>
  </Card>
  </Link>
  )
}

export default Btc