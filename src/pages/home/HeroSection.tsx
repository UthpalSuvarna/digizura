import heroContent from "@/data/hero-content.json";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface HeroItem {
  heading: string;
  paragraph: string;
  image?: string;
}

export default function HeroSection() {
  const services: HeroItem[] = heroContent;

  return (
    <section id= "services" className="w-full min-h-screen bg-white relative flex flex-col items-center pt-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center px-4 mb-16">
        <motion.h2
      className="text-4xl md:text-6xl font-sans font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative inline-block"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Our Services
      {/* Subtle animated underline */}
      <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gray-600 rounded-full transform -translate-x-1/2 animate-pulse opacity-50"></span>
    </motion.h2>

      </div>

      {/* Vertical Line */}
      <div className="absolute left-1/2 top-48 bottom-0 w-[3px] bg-gradient-to-b from-gray-400 via-gray-600 to-gray-400 rounded-full shadow-md"></div>

      {/* Timeline cards */}
      <div className="relative w-full max-w-5xl space-y-20 md:space-y-24">
        {services.map((item, index) => {
          // Framer Motion controls for animation
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
          const animation = useAnimation();

          useEffect(() => {
            if (inView) {
              animation.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              });
            }
          }, [inView]);

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={animation}
              className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              {/* Connector Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full shadow-lg z-10 border-2 border-white"></div>

              {/* Card */}
              <div
                className={`relative w-72 md:w-96 h-64 overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 group ${
                  index % 2 === 0 ? "ml-10 md:mr-[55%]" : "mr-10 md:ml-[55%]"
                }`}
              >
                {/* Background Image */}
                <img
                  src={item.image || `/images/service-${index + 1}.jpg`}
                  alt={item.heading}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

                {/* Hover Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                  <h3 className="text-2xl font-semibold mb-2">{item.heading}</h3>
                  <p className="text-sm text-gray-200">{item.paragraph}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
