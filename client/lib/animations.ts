export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

export const staggerContainer = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const slideInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "0px 0px -200px 0px" },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "0px 0px -200px 0px" },
};

export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "0px 0px -200px 0px" },
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.3 },
};

export const hoverTilt = {
  whileHover: { rotateX: 5, rotateY: 5 },
  transition: { duration: 0.3 },
};

export const rotateInY = {
  initial: { opacity: 0, rotateY: -90 },
  whileInView: { opacity: 1, rotateY: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "0px 0px -200px 0px" },
};
