import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

const Layout = ({ children }: React.PropsWithChildren) => {
  const url = useRouter();
  return (
    <main>
      <Header />
        {children}
      {url.asPath === '/' || <Footer />}
    </main>
  )
}

export default Layout