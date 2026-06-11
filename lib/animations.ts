import type { Variants, Transition } from "framer-motion";

const easeOut: Transition = { duration: 0.5, ease: [0.33, 1, 0.68, 1] };

export function makeFadeUp(reduced: boolean): Variants {
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: easeOut,
    },
  };
}

export function makeStaggerChildren(stagger = 0.08): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };
}

export function makeCardVariant(reduced: boolean, delay: number): Variants {
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay },
    },
  };
}

export function makeWordVariant(reduced: boolean): Variants {
  return {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  };
}
