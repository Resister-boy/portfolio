import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/" 
        className='w-12 h-12 bg-light text-dark flex items-center justify-center border border-light
        rounded-full text-sm font-bold hover:bg-[#333] hover:text-light duration-100' 
        whileHover={{scale: 1.2}}>
        RD
      </MotionLink>
    </div>
  )
}

export default Logo