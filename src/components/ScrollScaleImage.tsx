import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollScaleImageProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollScaleImage({ children, className = "" }: ScrollScaleImageProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { 
    margin: "-20% 0px -20% 0px", 
    amount: 0.4 
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: 0.96, opacity: 0.85 }}
      animate={{ 
        scale: inView ? 1 : 0.96, 
        opacity: inView ? 1 : 0.85 
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}