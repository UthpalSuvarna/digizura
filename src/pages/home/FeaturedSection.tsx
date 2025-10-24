
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import featuredContent from "@/data/featured-content.json"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion";

export function FeaturedSection() {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
      className="text-4xl md:text-6xl font-sans font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative inline-block"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Featured Projects
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
              {featuredContent.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 flex"
                >
                  <div className="p-4 w-full">
                    <Card className="bg-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300 h-full rounded-xl border border-gray-200">
                      <CardContent className="flex flex-col h-full p-6">
                        <div>
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full mx-auto object-cover rounded-lg mb-4"
                          />
                          {/* <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 text-center">
                            {feature.title}
                          </h3> */}
                          <p className="text-gray-600 text-sm md:text-base text-center">
                            {feature.description}
                          </p>
                        </div>

                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="absolute -left-14 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-14 top-1/2 -translate-y-1/2" /> */}
          </Carousel>
        </div>
      </div>
    </div>

  )
}
