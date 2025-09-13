
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import featuredContent from "@/data/featured-content.json"

export function FeaturedSection() {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl  font-sans font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
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
            <CarouselPrevious className="absolute -left-14 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-14 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </div>

  )
}
