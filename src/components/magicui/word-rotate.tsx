"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";

interface WordRotateProps {
  words: string[];
  className?: string;
  interval?: number;
}

const WordRotate = ({ words, className = "", interval = 2000 }: WordRotateProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={`relative h-[1.2em] overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default WordRotate; 