import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import Image from "next/image";

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  texts: string[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: { input: [number, number]; output: [number, number] };
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  texts = [],
  velocity = 70,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 10,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  const baseX = useMotionValue(0);
  const scrollOptions = scrollContainerRef
    ? { container: scrollContainerRef }
    : {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping.input,
    velocityMapping.output,
    { clamp: false }
  );

  const copyRef = useRef<HTMLSpanElement>(null);
  const [copyWidth, setCopyWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number | null>(null); // Store window width

  // Update window width once component is mounted client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth); // Access window only on client side
    }
  }, []);

  useLayoutEffect(() => {
    if (copyRef.current) {
      setCopyWidth(copyRef.current.offsetWidth);
    }
  }, [texts]);

  // Wrap function to handle scrolling
  function wrap(min: number, max: number, v: number): number {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
  }

  // Only access windowWidth when it's available (client-side)
  const x = useTransform(baseX, (v) =>
    windowWidth ? `${wrap(-copyWidth, windowWidth, v)}px` : "0px"
  );

  useAnimationFrame((t, delta) => {
    let moveBy = velocity * (delta / 1000) * (velocityFactor.get() || 1);
    baseX.set(baseX.get() + moveBy);
  });

  const repeatedText = new Array(numCopies)
    .fill(texts)
    .flat()
    .map((text, index) => (
      <span
        key={index}
        className={`flex-shrink-0 uppercase  text-white ${className}`}
      >
        {text}
      </span>
    ));

  return (
    <div
      className={`${parallaxClassName} flex flex-col gap-2 overflow-hidden w-full opacity-50`} // width full screen
      style={parallaxStyle}
    >
      <motion.div
        className={`${scrollerClassName} flex whitespace-nowrap font-inter text-subtitle font-medium tracking-[-0.02em] drop-shadow`}
        style={{
          x,
          ...scrollerStyle,
          width: "100%",
          height: "20px", // make sure it takes full width
        }}
      >
        <span
          ref={copyRef}
          className={`flex flex-shrink-0 gap-6 text-white ${className}`}
        >
          {repeatedText}
        </span>
      </motion.div>
      <Image
        src={"/_img/_pattern/pattern-damer.svg"}
        alt="damier"
        className="max-w-max"
        width={1920}
        height={20}
      />
    </div>
  );
};

export default ScrollVelocity;
