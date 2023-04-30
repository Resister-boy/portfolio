import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <div className='absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full shadow-2xl hover:cursor-pointer'>
      <Image
        src={"/assets/Ghost.png"}
        alt='Profile'
        width={80}
        height={80}
        className='rounded-full shadow-2xl border border-[#333]'
      />
    </div>
  )
}

export default Profile