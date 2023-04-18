import AnimatedText from '@/components/common/AnimatedText'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
      <Head>
        <title>Resister-boy | About Page</title>
        <meta name="description" content='any description' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <div className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-gl font-bold uppercase text-dark/75'>Biography</h2>
              <p className='font-medium'></p>
              <p className='my-4 font-medium'></p>
              <p className='font-medium'></p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default about