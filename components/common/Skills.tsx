import React from 'react'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark
           text-light shadow-dark cursor-pointer'
           whileHover={{scale: 1.05}}>

        </motion.div>
      </div>
    </>
  )
}

export default Skills