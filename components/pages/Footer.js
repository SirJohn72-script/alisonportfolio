import React from 'react'
import SocialMedia from '../common/SocialMedia'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <h2 className="footer__item footer__heading">
          Modern and ecological architecture
        </h2>
        <div className="linefooter__break footer__item"></div>
        <h2 className="footer__item footer__heading">Follow me on</h2>
        <div className="socialmedia footer__item">
          <SocialMedia color={'socialmedia--white-hover'} />
        </div>

        <h3 className="footer__item footer__subheading">
          Aliso&apos;s Portfolio
        </h3>
        <p className="footer__item footer__link_author">
          <Link href="/">
            <a>John&apos;s Script Desing</a>
          </Link>
        </p>

        <p className="footer__item footer__copy ">
          2022 &copy; Alison&apos;s Portfolio
        </p>
      </div>
    </div>
  )
}
