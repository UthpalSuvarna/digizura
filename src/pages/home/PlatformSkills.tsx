import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import platformSkills from "@/data/platform-skills.json"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion";

export function PlatformSkills() {
  return (
    <div id="technology" className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
      className="text-4xl md:text-6xl font-sans font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative inline-block"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Platform Skills
      {/* Subtle animated underline */}
      <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gray-600 rounded-full transform -translate-x-1/2 animate-pulse opacity-50"></span>
    </motion.h2>

        <div className="relative">
          <Carousel plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {platformSkills.map((skill, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/5 flex"
                >
                  <div className="p-4 w-full">
                    <Card className="bg-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300 h-full rounded-xl border border-gray-200">
                      <CardContent className="flex flex-col h-full p-6 items-center justify-center">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-24 h-24 object-contain"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
