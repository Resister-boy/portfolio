import React from 'react'
import Logo from '../common/Logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full mx-auto border-t-2 border-solid border-dark font-medium text-lg bg-[#333] text-light'>
      <div className='pt-8 pb-4 px-[15%] flex items-center justify-between'>
        <div className='flex items-center'>
          <Logo />
          <Link href={"/"} className='ml-8 text-sm hover:underline'>@resister-devlog</Link>
        </div>
      </div>
      <div className='w-full flex justify-center text-sm pb-8'>{new Date().getFullYear()} &copy; All Rights Reserved.</div>
    </footer>
  )
}

export default Footer