import { useEffect, useState } from 'react'
import HeaderWorks from '../../components/common/HeaderWorks'
import NavbarWorks from '../../components/common/Navbar.works'
import Layout from '../../components/Layout/Layout'
import Demo from '../../components/work/Demo'
import WorkDescription from '../../components/work/WorkDescription'
import { WorksPages } from '../../Info/InfoPages'
import { motion } from 'framer-motion'
import { RootHeaderWorkPage } from '../../components/motion/variants'
import WhitePage from '../../components/common/WhitePage'

export default function Work({ data }) {
  const [whitePage, setWhitePage] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
      setWhitePage(false)
    }, 500)
  }, [])

  return (
    <Layout navbar={<NavbarWorks />}>
      <WhitePage whitePage={whitePage} setWhitePage={setWhitePage} />

      <HeaderWorks title={data.title} image={data.image} />
      <WorkDescription
        images={data.images}
        description={data.descriptionFull}
        title={data.title}
      />
      <Demo />
    </Layout>
  )
}

export async function getStaticPaths() {
  try {
    const works = WorksPages
    const paths = works.map(({ link }) => ({ params: { link: `${link}` } }))
    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps({ params }) {
  try {
    const data = WorksPages.find((item) => item.link === params.link)
    return {
      props: {
        data,
      },
    }
  } catch (err) {
    return {
      props: {
        data: 'ok',
      },
    }
  }
}
