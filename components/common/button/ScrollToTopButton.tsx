import React from 'react'
import  { motion } from 'framer-motion';
import { ScrollTopBtnStype } from '@/types/ScrollTopBtnType';
import { ArrowUp } from '@/components/icons/ArrowUp';

const ScrollToTopButton = ({ top, right, domRef }: ScrollTopBtnStype) => {
  return (
      <motion.button onClick={(() => {
          if (domRef.current !== null) {
            domRef.current.scrollTop = 0;
          }
        })}
        className={`opacity-1 absolute ${top} ${right} border-2 border-dark px-1 py-1 rounded-full`} 
        whileHover={{y:-2}} >
        <ArrowUp className='w-8 mr-3' />
      </motion.button>
  )
}

export default ScrollToTopButton