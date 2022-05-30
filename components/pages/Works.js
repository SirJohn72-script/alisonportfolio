import { useEffect, useRef, useState } from 'react'
import Card from './Card'
import { WorksPages } from '../../Info/InfoPages'

export default function Works() {
  const cardsGeneralContainer = useRef(null)
  const cardsGeneralWrapper = useRef(null)
  const [currentSliderCard, setCurrentSliderCard] = useState(0)
  const [cards, setCards] = useState([
    // {
    //   id: 0,
    //   title: '',
    //   classColor: '',
    //   image: '',
    //   description: '',
    // },
  ])

  useEffect(() => {
    setCards(WorksPages)
  }, [])

  useEffect(() => {
    const cardsContainers = document.querySelectorAll('.card__slider')
    cardsGeneralWrapper.current.style.width = `${
      (WorksPages.length + 1) * 100
    }%`

    for (let card of cardsContainers) {
      card.style.width = `${cardsGeneralContainer.current.clientWidth}px`
    }
  }, [cards])

  const handleSliderMovement = (index) => {
    const marginLeft = `${-index * cardsGeneralContainer.current.clientWidth}px`
    cardsGeneralWrapper.current.style.left = marginLeft
  }

  return (
    <div className="container container--grey ">
      <div className="container__wrapper container--padding-secction">
        <div className="works">
          <div className="works__contaier">
            <div className="works__wrapper">
              {/* Title */}
              <div className="title__section">
                <h1 className="title__secction__heading">works</h1>
              </div>
              {/* Slider images */}
              <div className="slider__container" ref={cardsGeneralContainer}>
                <div className="slider__wrapper" ref={cardsGeneralWrapper}>
                  {cards.map((item, index) => (
                    <Card
                      key={index}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      classColor={item.classColor}
                      link={item.link}
                    />
                  ))}
                </div>
              </div>

              {/* Slider images */}
              <div className="slider__control">
                {cards.map((item, index) => (
                  <div
                    key={index}
                    className="slider__button"
                    onClick={() => handleSliderMovement(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
