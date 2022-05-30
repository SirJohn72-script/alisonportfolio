import Header from '../components/common/Header'
import Layout from '../components/Layout/Layout'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import Works from '../components/pages/Works'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Works />
      <About />
      <Contact />
    </Layout>
  )
}
