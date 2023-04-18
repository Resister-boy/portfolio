import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg'>
      <div className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>      
        <div className='flex items-center'>
          Build With 
          <span className='text-primary text-2xl px-1'>&#9825;</span>
          by &nbsp;<span>Resister-boy</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer