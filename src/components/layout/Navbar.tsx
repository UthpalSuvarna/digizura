import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 max-w-5xl md:mx-auto z-50 rounded-full border bg-white  backdrop-blur-lg md:mt-5 mx-2">
      <div className="flex h-14 items-center justify-between px-6">
        <Link to="/" className="flex items-center space-x-2">
          <img src="digizura.png" alt="DigiZura Logo" className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex text-gray-800">
          <Link to="/">Home</Link>
          <ScrollLink to="solutions" smooth={true} duration={500}>Solutions</ScrollLink>
          <ScrollLink to="technology" smooth={true} duration={500}>Technology</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
          <Link to="#">Industry</Link>
          <Link to="/careers">Career</Link>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink>
        </nav>



        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6 pl-5">
                <Link
                  to="/"
                  className="flex items-center space-x-2 font-bold"
                >
                  <img src="digizura.png" alt="DigiZura Logo" className="h-8 w-auto" />
                </Link>
                <Link to="/">Home</Link>
                <ScrollLink to="solutions" smooth={true} duration={500}>Solutions</ScrollLink>
                <ScrollLink to="technology" smooth={true} duration={500}>Technology</ScrollLink>
                <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
                <Link to="#">Industry</Link>
                <Link to="/careers">Career</Link>
                <ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}