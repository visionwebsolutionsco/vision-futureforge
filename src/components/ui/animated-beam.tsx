"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { forwardRef, useRef } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = React.useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
    >
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={`gradient-${id}`}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: "100%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: reverse ? "100%" : "0%",
            x2: reverse ? "0%" : "100%",
            y1: "0%",
            y2: "0%",
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} stopOpacity="0.5" />
          <stop stopColor={gradientStopColor} stopOpacity="0.5" />
          <stop stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>

      <motion.path
        ref={pathRef}
        d="M 10,50 Q 50,10 90,50"
        stroke={`url(#gradient-${id})`}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        fill="none"
        initial={{
          strokeDasharray: "0 100",
        }}
        animate={{
          strokeDasharray: "100 0",
        }}
        transition={{
          delay,
          duration,
          ease: [0.16, 1, 0.3, 1],
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        }}
      />
    </svg>
  );
};
