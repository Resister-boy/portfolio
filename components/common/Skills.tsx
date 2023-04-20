import React from 'react'
import { motion } from 'framer-motion'
import SkillBlock from './SkillBlock'

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark
           text-light py-6 px-8 shadow-dark cursor-pointer'
           whileHover={{scale: 1.05}}>
            Web
        </motion.div>
        <SkillBlock name="CSS" x="-20vw" y='2vw' />
        <SkillBlock name="HTML" x="-5vw" y='-10vw' />
        <SkillBlock name="JavaScript" x="20vw" y='6vw' />
        <SkillBlock name="ReactJS" x="0vw" y='12vw' />
        <SkillBlock name="NextJS" x="-20vw" y='-15vw' />
        <SkillBlock name="TypeScript" x="15vw" y='-12vw' />
        <SkillBlock name="Tailwind CSS" x="0vw" y='-20vw' />
        <SkillBlock name="Python" x="18vw" y='18vw' />
      </div>
    </>
  )
}

export default Skills