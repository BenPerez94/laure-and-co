"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { JSX, useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  color?: string;
  delay?: number;
}

export const Reveal = ({
  children,
  delay = 0.3,
  width = "fit-content",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className="relative p-6 overflow-hidden" style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.3, ease: "easeIn", delay: delay }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      />
    </div>
  );
};
