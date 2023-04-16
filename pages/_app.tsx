import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>

  )
}
