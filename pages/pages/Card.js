import React from 'react'
import Image from 'next/image'

export default function Card({ image, title, description, classColor }) {
  return (
    <div className="card__slider">
      <div className="card__wrapper">
        <div className="card__image">
          <div className="card__image__container">
            <div className={`card__image__wrapper ${classColor}`}>
              <Image src={image} alt="card" layout="fill" />
            </div>
          </div>
        </div>
        <div className="card__text">
          <div className="card__text_content">
            <h2 className="card__text_title">{title}</h2>
            <div className="card__text_description">
              <p className="card__text_description_text">{description}</p>
            </div>
            <button className="card__text_button">Visit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
