import { useState, useRef } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import SocialMedia from './SocialMedia'
import { colordark, colorgrey } from '../../styles/Vars/Variables.module.scss'
import { RootHeader, NavbarVariants } from '../motion/variants'
import { motion } from 'framer-motion'

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
          Alison&apos;s Portfolio
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
            <a
              href="#"
              className={'navbar__link'}
              onClick={() => handleMobileMenu()}
            >
              home
            </a>
          </li>
          <li className={'navbar__item'}>
            <a
              href="#"
              className={'navbar__link'}
              onClick={() => handleMobileMenu()}
            >
              works
            </a>
          </li>
          <li className={'navbar__item'}>
            <a
              href="#"
              className={'navbar__link'}
              onClick={() => handleMobileMenu()}
            >
              about
            </a>
          </li>
          <li className={'navbar__item'}>
            <a
              href="#"
              className={'navbar__link'}
              onClick={() => handleMobileMenu()}
            >
              contact
            </a>
          </li>

          <SocialMedia
            modifier={'socialmedia--absolute--bottom socialmedia--responsive'}
          />
        </ul>
      </motion.div>
    </motion.div>
  )
}
