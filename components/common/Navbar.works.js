import React from 'react'
import { BsArrowBarLeft } from 'react-icons/bs'
import Link from 'next/link'

export default function NavbarWorks() {
  return (
    <div className="navbarworks__container">
      <div className="navbarworks__wrapper">
        <h2 className="navbarworks__back">
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </div>
  )
}
