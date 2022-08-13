import Head from 'next/head'
import HeadlineCards from '../components/HeadlineCards'
import Hero from '../components/Hero'
import Meals from '../components/Meals'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

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
      <Meals />
      <Menu />
      <Footer />
    </div>
  )
}
