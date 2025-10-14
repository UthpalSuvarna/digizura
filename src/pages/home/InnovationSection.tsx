import { Card, CardContent } from "@/components/ui/card";

const innovations = [
  { title: "AMS", image: "/innovation/AMS.png" },
  { title: "Consumer", image: "/innovation/consumer.png" },
  { title: "EHS", image: "/innovation/EHS.png" },
  { title: "Finance", image: "/innovation/finance.png" },
  { title: "Logistics", image: "/innovation/logistics.png" },
  { title: "Microsoft", image: "/innovation/Microsoft.png" },
  { title: "Mobility", image: "/innovation/Mob.png" },
  { title: "Product", image: "/innovation/product.png" },
  { title: "Transport", image: "/innovation/Transport.png" },
];

export function InnovationSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Digizura Centres of Excellence are an important source of innovation
        </h2>

        {/* Fixed 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {innovations.map((item) => (
            <Card
              key={item.title}
              className="w-64 flex flex-col items-center justify-between text-center shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 duration-300"
            >
              <CardContent className="flex flex-col items-center p-6">
                {/* Blank circular placeholder (image unused) */}
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4" />

                {/* Title from JSON */}
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

                {/* Placeholder text (lorem ipsum points) */}
                <ul className="text-sm text-gray-600 list-disc text-left space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Sed do eiusmod tempor</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

  );
}
