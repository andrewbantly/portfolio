import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Projects from './projects'
// import About from './about'
import About from '@/components/About.js'
import Projects from '@/components/Projects.js'
import Contact from '@/components/Contact.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Bantly | Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="I'm a software developer with six years of problem solving experience."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <main className={`${styles.main}`}>
        <header>
          <div>
            <h1>{`Andrew Bantly`}</h1>
            <p className={`${styles.headline}`}>Software Engineer</p>
          </div>
          <Contact />
        </header>
        <div className={`${styles.flex}`}>
          <Projects></Projects>
          <About></About>
        </div>
      </main>
    </>
  )
}
