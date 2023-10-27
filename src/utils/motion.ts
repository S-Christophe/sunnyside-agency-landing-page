export const fadeIn = (delay: number, duration: number, direction?: string, from: number = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? from : direction === "right" ? from : 0,
    y: direction === "up" ? from : direction === "down" ? from : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { delay, type: "tween", ease: "easeOut", duration },
  },
});

/**
 * Component Header
 */
export const animateMenu = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.15,
    },
    transitionEnd: {
      display: "none"
    }
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
    display: "block"
  }
};


/**
 * Component imgGrid
 */
export const imgGrid = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

/**
 * Component imgGrid
 */
export const imgItem = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};

/**
 * Component Hero (img arrow)
 */
export const heroArrow = {
  hidden: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition : { delay: 1.3, repeat: Infinity, repeatDelay: 1, duration: 1 }
  }
};

// export const navVariants = {
//   open: {
//     clipPath: "inset(0% 0% 0% 0% round 10px)",
//     transition: {
//       type: "spring",
//       bounce: 0,
//       duration: 0.7,
//       delayChildren: 0.3,
//       staggerChildren: 0.05
//     }
//   },
//   closed: {
//     clipPath: "inset(10% 50% 90% 50% round 10px)",
//     transition: {
//       type: "spring",
//       bounce: 0,
//       duration: 0.3
//     }
//   }
// };