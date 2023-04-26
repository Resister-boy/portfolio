import React from 'react'
import { GithubIcon } from '../icons'
import { motion } from 'framer-motion'
import LinkChain from '../icons/LinkChain'

const ProjectCard = (block: any) => {
  return (
    <main className="mt-16 ml-8 px-4 h-auto border-gray-400 border-2 rounded-lg">
      <div className='font-semibold mt-4 pb-2 border-b-2 border-gray-400'>
        INFORMATION
      </div>
      <div className='mt-2 border-b-2 border-gray-400 pl-4'>
        <h5 className='text-[#ccc] text-sm mt-6 mb-3'>
          Overview
        </h5>
        <h5 className='text-[#ccc] text-sm my-3'>
          Key Features
        </h5>
        <h5 className='text-[#ccc] text-sm my-3'>
          Tools and Libraries Used
        </h5>
        <h5 className='text-[#ccc] text-sm mt-3 mb-6'>
          Resource
        </h5>
      </div>&nbsp;
      <div className='flex justify-start items-center'>
        <motion.a href={""} className='w-1/2 text-md flex py-2 mx-2 justify-center items-center rounded-lg' whileHover={{y: -2, backgroundColor: '#ededed'}}>
          <GithubIcon className='w-7 mr-3' />
          Github
        </motion.a>
        <motion.a href={""} className='w-1/2 text-md flex py-2 mx-2 justify-center items-center rounded-lg' whileHover={{y: -2, backgroundColor: '#ededed'}}>
          <LinkChain className='w-6 mr-3' />
          Deploy
        </motion.a>
      </div>&nbsp;
    </main>
  )
}

export default ProjectCard