import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Projects from './projects'
import About from './about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Bantly | Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main className={`${styles.main}`}>
        <header>
          <h1>{`Andrew Bantly`}</h1>
          <p className={`${styles.headline}`}>Software engineer</p>
        </header>
        <div className={`${styles.flex}`}>
        <About></About>
        <Projects></Projects>
        </div>
      </main>
    </>
  )
}
