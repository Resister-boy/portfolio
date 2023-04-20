import React from 'react'
import { easeIn, easeInOut, motion } from 'framer-motion'

type SkillBlockType = {
  name: string;
  x: string;
  y: string;
}

const SkillBlock = ({ name, x, y }: SkillBlockType) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark
           text-light py-4 px-8 shadow-dark cursor-pointer absolute'
           whileHover={{scale: 1.2}}
           initial={{x: 0, y: 0}}
           whileInView={{x: x, y: y}}
           transition={{ duration: 1.5, ease: easeInOut }}
           viewport={{once: true}}>
          {name}
    </motion.div>
  )
}

export default SkillBlock