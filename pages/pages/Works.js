import { useEffect, useRef, useState } from 'react'
import Card from './Card'

export default function Works() {
  const cardsGeneralContainer = useRef(null)
  const cardsGeneralWrapper = useRef(null)
  const [currentSliderCard, setCurrentSliderCard] = useState(0)
  const [cards, setCards] = useState([
    {
      title: 'Capilla de San Antonio',
      classColor: 'card__image__wrapper--red',
      image:
        'https://images.unsplash.com/photo-1653730916531-ac652f6a93ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      description: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                amet soluta necessitatibus eaque ab, cupiditate earum asperiores
                nostrum esse excepturi officiis. Eos magni aliquid hic
                laboriosam delectus molestiae provident magnam perferendis,
                omnis dolores ex. Omnis sit voluptate corrupti recusandae fugit.`,
    },
    {
      title: 'Coffee York',
      classColor: 'card__image__wrapper--orange',
      image:
        'https://images.unsplash.com/photo-1653731056338-0f67b11b91df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      description: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                amet soluta necessitatibus eaque ab, cupiditate earum asperiores
                nostrum esse excepturi officiis. Eos magni aliquid hic
                laboriosam delectus molestiae provident magnam perferendis,
                omnis dolores ex. Omnis sit voluptate corrupti recusandae fugit.`,
    },
    {
      title: 'Pizzeria de Don Pepellino',
      classColor: 'card__image__wrapper--blue',
      image:
        'https://images.unsplash.com/photo-1653672994990-086a64a40447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      description: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                amet soluta necessitatibus eaque ab, cupiditate earum asperiores
                nostrum esse excepturi officiis. Eos magni aliquid hic
                laboriosam delectus molestiae provident magnam perferendis,
                omnis dolores ex. Omnis sit voluptate corrupti recusandae fugit.`,
    },
    {
      title: 'Centro de Salud de Puebla',
      classColor: 'card__image__wrapper--green',
      image:
        'https://images.unsplash.com/photo-1653693012154-8b4e34dc0d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      description: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                amet soluta necessitatibus eaque ab, cupiditate earum asperiores
                nostrum esse excepturi officiis. Eos magni aliquid hic
                laboriosam delectus molestiae provident magnam perferendis,
                omnis dolores ex. Omnis sit voluptate corrupti recusandae fugit.`,
    },
  ])

  useEffect(() => {
    const cardsContainers = document.querySelectorAll('.card__slider')

    cardsGeneralWrapper.current.style.width = `${
      (cardsContainers.length + 1) * 100
    }%`

    for (let card of cardsContainers) {
      card.style.width = `${cardsGeneralContainer.current.clientWidth}px`
    }
  }, [])

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
