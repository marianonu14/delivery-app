import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delivery App</title>
        <meta name="description" content="Delivery App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
