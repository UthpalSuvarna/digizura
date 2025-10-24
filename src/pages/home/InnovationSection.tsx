import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import innovations from "@/data/innovation.json";

interface InnovationItem {
  title: string;
  image: string;
  description:
  | string
  | string[]
  | {
    main: string;
    points: string[];
  };
}


export function InnovationSection() {
  const [selectedItem, setSelectedItem] = useState<InnovationItem | null>(null);

  const handleCardClick = (item: InnovationItem) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <section id="solutions" className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
       <motion.h2
      className="text-4xl md:text-6xl font-sans font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative inline-block"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Innovations and Solutions
      {/* Subtle animated underline */}
      <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gray-600 rounded-full transform -translate-x-1/2 animate-pulse opacity-50"></span>
    </motion.h2>


        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {(innovations as InnovationItem[]).map((item) => (
            <motion.div
              key={item.title}
              layoutId={item.title}
              onClick={() => handleCardClick(item)}
              className="cursor-pointer"
            >
              <Card className="w-64 flex flex-col items-center justify-between text-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated popup card */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            {/* Expanded card */}
            <motion.div
              layoutId={selectedItem.title}
              className="fixed top-1/2 left-1/2 z-50 bg-white rounded-2xl shadow-2xl w-11/12 max-w-lg p-8 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-28 h-28 rounded-full mb-4 object-cover mx-auto"
              />

              <h3 className="text-2xl font-semibold text-center mb-4">
                {selectedItem.title}
              </h3>

              {/* Description rendering */}
              {typeof selectedItem.description === "object" && !Array.isArray(selectedItem.description) ? (
                <div className="text-gray-600 mb-6 text-left">
                  <p className="mb-2">{selectedItem.description.main}</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    {selectedItem.description.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : Array.isArray(selectedItem.description) ? (
                <ul className="text-gray-600 mb-6 list-disc list-inside text-left space-y-1">
                  {selectedItem.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-center mb-6">{selectedItem.description}</p>
              )}
              
              <div className="flex justify-center">
                <button
                  onClick={closeModal}
                  className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
