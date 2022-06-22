import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Duel</title>
        <link rel="icon" href="/Dueel.ico" />
      </Head>

      <main>
        <Header title="Hello! My name is Duel" />
        <p className="description">
          I am a newbie just learning how to code
        </p>
      </main>

    </div>
  )
}
