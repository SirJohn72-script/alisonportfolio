import Header from '../components/common/Header'
import Navbar from '../components/common/Navbar'
import Layout from '../components/Layout/Layout'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import Works from '../components/pages/Works'

export default function Home() {
  return (
    <Layout navbar={<Navbar />}>
      <Header />
      <Works />
      <About />
      <Contact />
    </Layout>
  )
}
