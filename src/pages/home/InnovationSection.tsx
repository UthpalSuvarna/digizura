const innovations = [
  {
    title: "AMS",
    image: "/innovation/AMS.png",
  },
  {
    title: "Consumer",
    image: "/innovation/consumer.png",
  },
  {
    title: "EHS",
    image: "/innovation/EHS.png",
  },
  {
    title: "Finance",
    image: "/innovation/finance.png",
  },
  {
    title: "Logistics",
    image: "/innovation/logistics.png",
  },
  {
    title: "Microsoft",
    image: "/innovation/Microsoft.png",
  },
  {
    title: "Mobility",
    image: "/innovation/Mob.png",
  },
  {
    title: "Product",
    image: "/innovation/product.png",
  },
  {
    title: "Transport",
    image: "/innovation/Transport.png",
  },
];

export function InnovationSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8">Digizura Centres of Excellence are an important source of innovation</h2>
        <div className="flex flex-wrap justify-around gap-6">
          {innovations.map((item) => (
            <img
              key={item.title}
              src={item.image}
              alt={item.title}
              className="h-60 w-1/4 object-contain transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
