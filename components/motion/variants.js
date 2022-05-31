export const RootHeader = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
}

export const RootHeaderWork = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1.2,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
}

//
export const RootHeaderWorkPage = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    border: '10px solid red',
    transition: {
      delay: 0.1,
      duration: 10,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
}

// Dark letter
export const DarkLetterRoot = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      staggerChildren: 0.03,
      when: 'beforeChildren',
    },
  },
}

export const DarkLettersChild = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
}

// Image
export const ImageVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  },
}

//navar
export const NavbarVariants = {
  hidden: {
    opacity: 0,
    y: -120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.2,
      duration: 0.6,
    },
  },
}
