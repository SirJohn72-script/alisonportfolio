import { useState, useRef } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import SocialMedia from './SocialMedia'
import { colordark, colorgrey } from '../../styles/Vars/Variables.module.scss'
import { RootHeader, NavbarVariants } from '../motion/variants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const Menu = useRef(null)
  const MobileMenu = useRef(null)
  const Logo = useRef(null)

  const handleMobileMenu = () => {
    if (!showMobileMenu) {
      Menu.current.style.left = '0'
      MobileMenu.current.style.color = `${colordark}`
      Logo.current.style.color = `${colordark}`
    } else {
      Menu.current.style.left = '-100%'
      MobileMenu.current.style.color = `${colorgrey}`
      Logo.current.style.color = `${colorgrey}`
    }
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <motion.div
      className={'navbar_container'}
      initial={'hidden'}
      animate={'visible'}
      variants={RootHeader}
    >
      <motion.div className={'navbar__wrapper'} variants={NavbarVariants}>
        <h2 className={'navbar__logo'} ref={Logo}>
          <Link href="/">
            <a onClick={() => handleMobileMenu()}>Alison&apos;s Portfolio</a>
          </Link>
        </h2>

        <div
          className={'navbar__mobileicon'}
          onClick={() => handleMobileMenu()}
          ref={MobileMenu}
        >
          <CgMenuGridR />
        </div>

        <ul className={'navbar__menu'} ref={Menu}>
          <li className={'navbar__item'}>
            <Link href="/">
              <a className={'navbar__link'} onClick={() => handleMobileMenu()}>
                home
              </a>
            </Link>
          </li>
          <li className={'navbar__item'}>
            <LinkScroll
              to="works-secction"
              smooth={true}
              className={'navbar__link'}
              onClick={() => handleMobileMenu()}
            >
              works
            </LinkScroll>
          </li>
          <li className={'navbar__item'}>
            <LinkScroll
              to="about-secction"
              smooth={true}
              className={'navbar__link'}
              onClick={() => handleMobileMenu()}
            >
              about
            </LinkScroll>
          </li>
          <li className={'navbar__item'}>
            <LinkScroll
              to="contact-secction"
              smooth={true}
              className={'navbar__link'}
              onClick={() => handleMobileMenu()}
            >
              contact
            </LinkScroll>
          </li>

          <SocialMedia
            modifier={'socialmedia--absolute--bottom socialmedia--responsive'}
          />
        </ul>
      </motion.div>
    </motion.div>
  )
}
