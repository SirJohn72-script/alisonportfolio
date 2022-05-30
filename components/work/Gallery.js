import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Gallery({ images }) {
  const [currentPhoto, setCurrentPhoto] = useState(images[0])

  return (
    <div className="gallery__container">
      <div className="gallery__wrapper">
        <div className="gallery__currentphoto">
          <div className="gallery__currentphoto_wrapper">
            <Image src={currentPhoto} alt="control" layout="fill" />
          </div>
        </div>
        <div className="gallery__thumpnails">
          {images.map((photo, index) => (
            <div
              key={index}
              className="gallery__thumpnails_wrapper"
              onClick={() => setCurrentPhoto(photo)}
            >
              <Image src={photo} alt="control" layout="fill" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
