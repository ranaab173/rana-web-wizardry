import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-foreground">Rana</span>
            <span className="text-primary">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition-smooth">
              Skills
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth">
              Portfolio
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth" onClick={toggleMenu}>
                Home
              </a>
              <a href="#skills" className="text-foreground hover:text-primary transition-smooth" onClick={toggleMenu}>
                Skills
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-smooth" onClick={toggleMenu}>
                Services
              </a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth" onClick={toggleMenu}>
                Portfolio
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth" onClick={toggleMenu}>
                Contact
              </a>
              <Button variant="hero" size="sm" className="w-fit">
                Hire Me
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;