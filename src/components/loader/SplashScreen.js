'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Loader from './Loader';
import { bgColor } from '../classes/TailwindClasses';

const taglineText = "Stealth . Smart . Speedy";

// Stagger variant for character typing
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

// Child variant for individual characters
const letterVariants = {
  hidden: { opacity: 0, y: 3 },
  visible: { opacity: 1, y: 0 },
};

// Main container mount & unmount animations
const containerVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: -10,
    transition: { duration: 0.4, ease: "easeInOut" } 
  }
};

// Footer mount & unmount animations
const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5, transition: { duration: 0.8, delay: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export default function SplashScreen({ isVisible = true }) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div key="splash-wrapper"
          className={`w-full h-screen flex flex-col justify-center items-center ${bgColor} select-none inset-0`}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Main Content (Loader + Tagline) */}
          <motion.div 
            variants={containerVariants} 
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <Loader size="w-50" />
            </div>

            {/* Framer Motion Typing Tagline */}
            <motion.p
              className="text-[var(--text-primary)] text-center tracking-[0.25em] uppercase font-mono text-xs sm:text-sm font-medium opacity-90 flex items-center"
              variants={sentenceVariants}
            >
              {taglineText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}

              {/* Blinking Cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block w-[2px] h-4 bg-[var(--text-highlight)] ml-1"
              />
            </motion.p>
          </motion.div>

          {/* Footer copyright */}
          <motion.p
            variants={footerVariants}
            className="text-[var(--text-secondary)] fixed bottom-5 text-center text-xs tracking-wider font-mono"
          >
            © 2026 Aruti AI. All rights reserved.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}