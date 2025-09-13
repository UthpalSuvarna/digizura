import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import heroContent from './hero-content.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
};

export function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-blue-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="relative z-10 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200 font-sans font-bold"
            >
              {heroContent[index].heading}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-neutral-400 mx-auto max-w-lg my-4 text-sm relative z-10"
            >
              {heroContent[index].paragraph}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
      <BackgroundBeams />
    </div>

  );
}
