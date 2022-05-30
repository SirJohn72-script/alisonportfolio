import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({
  image = 'https://images.unsplash.com/photo-1653730916531-ac652f6a93ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  title,
  description,
  classColor,
  link,
}) {
  return (
    <div className="card__slider">
      <div className="card__wrapper">
        <div className="card__image">
          <div className="card__image__container">
            <div className={`card__image__wrapper ${classColor}`}>
              <Image
                src={image}
                alt="card"
                layout="fill"
                blurDataURL="blur"
                priority
              />
            </div>
          </div>
        </div>
        <div className="card__text">
          <div className="card__text_content">
            <h2 className="card__text_title">{title}</h2>
            <div className="card__text_description">
              <p className="card__text_description_text">{description}</p>
            </div>
            <Link href={`/works/${link}`} scroll={false}>
              <button className="card__text_button">
                <a>Visit</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
