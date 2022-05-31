import '../styles/globals.scss'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageInitial"
        variants={{
          pageInitial: {
            opacity: 0,
            type: 'tween',
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              duration: 1.2,
              type: 'tween',
            },
          },
        }}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
