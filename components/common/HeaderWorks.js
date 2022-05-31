import { motion } from 'framer-motion'
import {
  RootHeaderWork,
  DarkLetterRoot,
  DarkLettersChild,
  ImageVariants,
} from '../motion/variants'
import { useRef, useEffect } from 'react'

export default function HeaderWorks({ title = '', image = '' }) {
  const backgroundImage = useRef(null)

  useEffect(() => {
    backgroundImage.current.style.backgroundImage = `url(${image})`
  }, [image])

  return (
    <div className={'container'}>
      <div className={'container__wrapper container--padding-top '}>
        <motion.div
          className="header"
          initial="hidden"
          animate="visible"
          variants={RootHeaderWork}
        >
          <div className="header__wrapper">
            <div className="header__centercontent">
              {/* Secction 1 */}
              <motion.div
                variants={DarkLetterRoot}
                className="titleheader__heading--responsive--none"
              >
                <div className="titleheader">
                  {title.split('').map((item, index) => (
                    <motion.h1
                      variants={DarkLettersChild}
                      className="titleheader__heading"
                      key={index}
                    >
                      {item}
                    </motion.h1>
                  ))}
                </div>
              </motion.div>

              {/* Secction 2 */}
              <div className="header_imagecontainer">
                <motion.div
                  variants={ImageVariants}
                  className="header__imagewrapper"
                  ref={backgroundImage}
                >
                  <div className="header__imagetextwrapper">
                    <motion.div variants={DarkLetterRoot}>
                      <div className="titleheader">
                        {title.split('').map((item, index) => (
                          <motion.h1
                            variants={DarkLettersChild}
                            className="titleheader__heading titleheader__heading--white"
                            key={index}
                          >
                            {item}
                          </motion.h1>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
