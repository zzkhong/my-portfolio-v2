"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { MyCard } from "components/3DCard/MyCard";

export const HeroParallax = ({
  portfolios,
}: {
  portfolios: {
    title: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = portfolios.slice(0, 5);
  const secondRow = portfolios.slice(5, 10);
  const thirdRow = portfolios.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-150, 0]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="py-20 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((portfolio) => (
            <PortfolioCard
              portfolio={portfolio}
              translate={translateX}
              key={portfolio.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((portfolio) => (
            <PortfolioCard
              portfolio={portfolio}
              translate={translateXReverse}
              key={portfolio.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((portfolio) => (
            <PortfolioCard
              portfolio={portfolio}
              translate={translateX}
              key={portfolio.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return <div className="relative mx-auto px-4 w-full left-0 top-0"></div>;
};

export const PortfolioCard = ({
  portfolio,
  translate,
}: {
  portfolio: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={portfolio.title}
      className="group/portfolio h-96 w-[30rem] relative flex-shrink-0"
    >
      <Image
        src={portfolio.thumbnail}
        height="300"
        width="300"
        draggable={false}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={portfolio.title}
      />
    </motion.div>
  );
};
