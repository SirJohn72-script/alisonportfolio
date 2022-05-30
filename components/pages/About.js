import React from 'react'

export default function About() {
  return (
    <div className="container container--min-height">
      <div className="container__wrapper container--padding-secction">
        <div className="about">
          <div className="about__wrapper">
            <div className="about__image">
              {/* About Image Secction */}
              <div className="about__image_message">
                {/* Text About me */}
                {'alison parker'.split('').map((item, index) => (
                  <h1 key={index} className="about__image_title">
                    {item}
                  </h1>
                ))}
                {/* Image Alison */}
                <div className="about__image_image">
                  <div className="about__image_image_whitetext">
                    {'alison parker'.split('').map((item, index) => (
                      <h1
                        key={index}
                        className="about__image_title about__image_title--white"
                      >
                        {item}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Info about alison parker */}
            <div className="about__description">
              <h2 className="about__description_title">A little bit of me</h2>
              <p className="about__description_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                in velit quam optio cum, voluptatum commodi excepturi deleniti
                fugit voluptate quaerat nobis saepe non officiis? Incidunt
                consectetur sit aperiam harum vitae quibusdam possimus dolore
                at, repudiandae voluptates blanditiis maiores. Dolore in
                laboriosam nam alias consectetur cupiditate optio adipisci quia
                placeat veniam, ipsum, quis, soluta consequatur at assumenda
                illum deserunt officia.
              </p>
            </div>
            {/* line break */}
            <div className="about__linebreak">
              <div className="line"></div>
            </div>
            {/* vision and mision */}
            <div className="about_visionandmission">
              <div className="about_vision_mision_item">
                <div className="about_vision_mision_title">
                  <p className="about__description_title">Vision</p>
                </div>
                <div className="about_vision_mision_description">
                  <p className="about__description_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam eaque fugiat fuga veniam nemo dolorem ullam rem at.
                    Sequi, quasi harum. Vero unde sunt fugiat temporibus,
                    nesciunt architecto asperiores! Delectus.
                  </p>
                </div>
              </div>
              <div className="about_vision_mision_item">
                <div className="about_vision_mision_title">
                  <p className="about__description_title">Mission</p>
                </div>
                <div className="about_vision_mision_description">
                  <p className="about__description_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam eaque fugiat fuga veniam nemo dolorem ullam rem at.
                    Sequi, quasi harum. Vero unde sunt fugiat temporibus,
                    nesciunt architecto asperiores! Delectus.
                  </p>
                </div>
              </div>
            </div>

            {/* line break */}
            <div className="about__linebreak">
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
