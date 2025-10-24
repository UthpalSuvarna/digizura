import { HeroGeometric } from "../../components/ui/shadcn-io/shape-landing-hero";
import { Button } from "@/components/ui/button";
import openPositions from "@/data/jobs.json"; 

export default function Careers() {
  return (
    <div className="bg-[#0A0A23] text-white min-h-screen antialiased">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <HeroGeometric
          badge="Join Our Team"
          title1="Build Your"
          title2="Career With Us"
          description="Explore exciting opportunities, grow your skills, and be part of a team that is shaping the future with cutting-edge technology."
        />

        <Button
          variant="outline"
          className="mt-10 border-white text-black hover:bg-white hover:text-black transition-colors duration-300"
          onClick={() => window.location.href = "#open-positions"}
        >
          See Open Positions
        </Button>
      </div>

      {/* Why Join Us Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join DigiZura?</h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          At DigiZura, we provide a collaborative environment, opportunities for growth, and the chance to work on cutting-edge AI and tech projects that make a real impact.
        </p>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Open Positions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {openPositions.map((job, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-300 mb-4">{job.description}</p>
              <Button
                variant="outline"
                className="border-white text-black hover:bg-black hover:text-white transition-colors duration-300"
                onClick={() => window.location.href = `mailto:${job.email}`}
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
