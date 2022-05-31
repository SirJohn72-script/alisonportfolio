import React from 'react'
import { motion } from 'framer-motion'

export default function WhitePage({ whitePage, setWhitePage }) {
  if (whitePage) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: {
            opacity: 1,
          },
          visible: {
            opacity: 0,
            //   opacity: 0,
            transition: {
              type: 'tween',
              duration: 2.2,
            },
          },
          exit: {
            display: 'none',
          },
        }}
        className="whitepage"
      ></motion.div>
    )
  } else {
    return null
  }
}
