import React from 'react'
import LoadingAnimation from '../../public/assets/LoadingAnimation.json'
import Lottie from 'react-lottie-player'
import { LoadingType } from '@/types/LoadingType'

const Loading = ({ width, height }: LoadingType) => {
  return (
    <Lottie
      loop 
      animationData={LoadingAnimation} 
      play
      style={{
        width: width,
        height: height
      }}
    />
  )
}

export default Loading