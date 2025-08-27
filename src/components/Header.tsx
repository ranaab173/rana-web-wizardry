import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-footer-bg/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo - Empty for minimal design like reference */}
          <div></div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-red-accent transition-smooth font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-red-accent transition-smooth font-medium">
              About
            </a>
            <a href="#portfolio" className="text-foreground hover:text-red-accent transition-smooth font-medium">
              Portfolio
            </a>
            <a href="#services" className="text-foreground hover:text-red-accent transition-smooth font-medium">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-red-accent transition-smooth font-medium">
              Contact
            </a>
          </nav>

          {/* CV Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size="sm"
              className="border-red-accent text-red-accent hover:bg-red-accent hover:text-white transition-smooth"
            >
              Curriculum Vitae | CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-red-accent transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border/20">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-red-accent transition-smooth font-medium" onClick={toggleMenu}>
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-red-accent transition-smooth font-medium" onClick={toggleMenu}>
                About
              </a>
              <a href="#portfolio" className="text-foreground hover:text-red-accent transition-smooth font-medium" onClick={toggleMenu}>
                Portfolio
              </a>
              <a href="#services" className="text-foreground hover:text-red-accent transition-smooth font-medium" onClick={toggleMenu}>
                Services
              </a>
              <a href="#contact" className="text-foreground hover:text-red-accent transition-smooth font-medium" onClick={toggleMenu}>
                Contact
              </a>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-fit border-red-accent text-red-accent hover:bg-red-accent hover:text-white transition-smooth"
              >
                CV
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;