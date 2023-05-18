import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
        <footer>© Andrew Bantly {new Date().getFullYear()} GPLv3</footer>
      </body>
    </Html>
  )
}
