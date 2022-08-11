import Head from 'next/head'
import HeadlineCards from '../components/HeadlineCards'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Delivery App</title>
        <meta name="description" content="Delivery App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <HeadlineCards />
    </div>
  )
}
