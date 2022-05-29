import Head from 'next/head'
import Navbar from '../common/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Alison&apos;s Portfolio</title>
        <meta description="Pagina de Alison Parker" />
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main>{children}</main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  )
}
