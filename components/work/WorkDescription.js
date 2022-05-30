import { useEffect, useState } from 'react'
import Gallery from './Gallery'

export default function WorkDescription({ images, description, title }) {
  const [descriptionArray, setDescriptionArray] = useState([])
  useEffect(() => {
    setDescriptionArray(description.split('???'))
  }, [])

  return (
    <div className="container container--grey container--padding-secction container--min-height">
      <div className="container__wrapper">
        <div className="workdescription__wrapper">
          <div className="workdescription__text">
            <div className="workdescription__text_content">
              <h1>{title}</h1>
              {descriptionArray.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="workdescription__gallery">
            <Gallery images={images} />
          </div>
        </div>
      </div>
    </div>
  )
}
