import React from 'react'
import { GithubIcon } from '../icons'
import { motion } from 'framer-motion'
import LinkChain from '../icons/LinkChain'
import { PageType } from '@/types/PageType'

const ProjectCard = (tag: PageType) => {
  const categories = tag.page.properties.Categories.multi_select;
  return (
    <main className="mt-16 ml-8 px-4 h-auto border-gray-400 border-2 rounded-lg">
      <div className='font-semibold mt-4 pb-2 border-b-2 border-gray-400'>
        CATEGORIES
      </div>
      <div className='mt-2 border-b-2 border-gray-400 pl-4 flex flex-wrap'>
        {categories.map((category, index) => {
          return (
            <div key={index}
              className='mx-1 my-1.5 py-1 px-2 text-sm text-gray-400 border border-gray-300 hover:cursor-pointer hover:bg-gray-300 hover:text-white duration-150 rounded-lg'>
              {category.name}
            </div>
          )})}
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