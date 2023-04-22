import React from 'react'
import Link from 'next/link'
import { CustomLink } from './CustomLink'
import { TwitterIcon, GithubIcon, InstagramIcon } from '../icons'
import { motion } from 'framer-motion'

const NavBar = () => {
  return (
    <main className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/articles" title="Articles" className='ml-4' />
      </nav>
      <nav className='flex items-center justify-between flex-wrap'>
        <motion.a href="https://github.com/Resister-boy" target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className='mx-2'>
          <GithubIcon className='w-8 mr-3' />
        </motion.a>
        <motion.a href="https://www.instagram.com/resister_devlog" target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className='mx-2'>
          <InstagramIcon className="w-8 mr-3" />
        </motion.a>
        <motion.a href="https://twitter.com/resister_boy" target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className='mx-2'>
          <TwitterIcon className='w-8 mr-3' />
        </motion.a>
      </nav>
    </main>
  )
}

export default NavBar