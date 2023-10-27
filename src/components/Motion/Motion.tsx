// import vendors
import { motion, useReducedMotion } from "framer-motion";

// import types
import { IMotion } from '@/types/Motion'

export default function Motion ({ as = "div", variants, className, style, children}: IMotion) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as as keyof typeof motion];

  return (
    <Component
      variants={shouldReduceMotion ? "visible" : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
			className={className}
      style={style}
    >
    	{children}
    </Component>
  );
};