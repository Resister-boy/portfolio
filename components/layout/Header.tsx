import React from 'react'
import NavBar from '../common/NavBar'
import Logo from '../common/Logo'

const Header = () => {
  return (
    <main>
      <NavBar />
      <div className='absolute left-[50%] top-2 translate-x[-50%]'>
        <Logo />
      </div>
    </main>
  )
}

export default Header