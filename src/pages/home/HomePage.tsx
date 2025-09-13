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
    <div className="h-screen w-full bg-neutral-950 dark relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-5xl mx-auto px-6">
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
              className="relative z-10 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
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
      <div className="absolute bottom-0 translate-y-1/2 w-full max-w-5xl mx-auto px-6">
        <video
          src="https://cdn.dribbble.com/userupload/12584539/file/original-23643c2898857c639b291a111915f399.mp4"
          autoPlay
          muted
          loop
          className="w-full h-1/2 object-cover rounded-lg"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}