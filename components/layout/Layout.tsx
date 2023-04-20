import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <main>
      <Header />
        {children}
      {/* <Footer /> */}
    </main>
  )
}

export default Layout