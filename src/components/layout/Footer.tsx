import { Separator } from "../ui/separator";
import { Facebook, Twitter, Linkedin } from "lucide-react"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-2 text-sm text-gray-400">
              At Digizura, we believe there is a better way to execute core
              business processes through the use of Digital. We bring in thought
              leadership from various industries with a focus on providing smart
              and sustainable digital solutions to customers, which we believe
              can significantly improve their business processes. We’re
              obsessively passionate about it, and our mission is to help
              Business achieve it.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Latest Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h3 className="font-semibold mb-4">Offices</h3>
            <p className="text-sm text-gray-400">
              Digizura Technologis Pvt Ltd <br />
              #3478J Chirush Mansion 13th Cross HAL 2nd Stage <br />
              Indiranagar Bangalore-560008 <br />
              Karnataka, India <br />
              <br />
              Phone: +91-761-966-3077 <br />
              central.operations@digizura.com
            </p>
          </div>
        </div>


        {/* Socials Below */}
        <div className="flex justify-center space-x-6 mb-6 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <Separator className="my-8 bg-gray-700" />
        <div className="text-center text-sm text-gray-500">
          <p>&copy; 2025 Digizura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
