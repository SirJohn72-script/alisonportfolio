import Head from 'next/head'
import Navbar from '../common/Navbar'
import Footer from '../pages/Footer'

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
        <Footer />
      </footer>
    </>
  )
}
