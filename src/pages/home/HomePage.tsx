import { HeroGeometric } from "../../components/ui/shadcn-io/shape-landing-hero";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       staggerChildren: 0.1,
//       staggerDirection: -1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
//   exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
// };

export function HomePage() {
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  //   }, 5000); // Change text every 5 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-screen w-full bg-[#0A0A23] relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <HeroGeometric
        badge="AI Powered"
        title1="Empowering Your"
        title2="AI Journey"
        description="Harness the power of AI to build innovative, scalable, and intelligent solutions tailored to your business needs."
      />
    </div>

  );
}
