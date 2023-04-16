import React from 'react'
import { AnimatedTextType } from '@/types/AnimatedText'
import { motion } from 'framer-motion'

const quote = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.05
    }
  }
}

const single = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

const AnimatedText = ({ text, className }: AnimatedTextType) => {
  return (
    <main className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1 
        className={`inline-block w-full text-dark font-bold capitalize ${className}`}
        variants={quote}
        initial="initial"
        animate="animate">
        {text.split(" ").map((word, index) => (
          <motion.span 
            key={word + '-' + index} className='inline-block'
            variants={single}
            initial="initial"
            animate="animate">
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </main>
  )
}

export default AnimatedText