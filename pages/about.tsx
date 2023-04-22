import AnimatedText from '@/components/common/AnimatedText'
import Skills from '@/components/common/Skills'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <>
      <Head>
        <title>Resister-boy | About</title>
        <meta name="description" content='any description' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center bg-light'>
        <div className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='text-8xl'/>
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'></h2>
              <p className='font-medium'></p>
              <p className='my-4 font-medium'></p>
              <p className='font-medium'></p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <Skills />
        </div>
      </main>
    </>
  )
}

export default About