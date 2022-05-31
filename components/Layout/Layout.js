import Head from 'next/head'
import Footer from '../pages/Footer'

export default function Layout({ children, navbar }) {
  return (
    <>
      <Head>
        <title>Alison&apos;s Portfolio</title>
        <meta description="Pagina de Alison Parker" />
      </Head>

      <nav>{navbar}</nav>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
