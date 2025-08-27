import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Youtube, Instagram, Twitter } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-screen relative bg-background overflow-hidden">
      {/* Yellow Background Blob */}
      <div className="background-blob yellow-blob"></div>
      
      {/* Profile Avatar */}
      <div className="profile-avatar">
        <img 
          src={profileAvatar} 
          alt="Rana Abubakar - Web Developer" 
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
      
      {/* Social Icons Sidebar */}
      <div className="social-sidebar hidden md:flex flex-col space-y-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
           className="text-gray-custom hover:text-foreground transition-smooth">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
           className="text-gray-custom hover:text-foreground transition-smooth">
          <Youtube className="w-5 h-5" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
           className="text-gray-custom hover:text-foreground transition-smooth">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
           className="text-gray-custom hover:text-foreground transition-smooth">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
           className="text-gray-custom hover:text-foreground transition-smooth">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
      
      {/* Contact Email Sidebar */}
      <div className="contact-email hidden lg:block">
        <a href="mailto:rana@example.com" 
           className="text-sm text-gray-custom hover:text-foreground transition-smooth whitespace-nowrap">
          rana@example.com
        </a>
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-lg text-gray-custom mb-4">G'day, I'm</p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
              Rana Abubakar,
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-red-accent mb-8">
              A Web Developer
            </h2>
            
            <p className="text-lg text-gray-custom leading-relaxed mb-8 max-w-xl">
              I'm a skilled web developer with expertise in HTML, CSS, JavaScript, PHP, React, and modern responsive web applications. 
              Specialized in eCommerce solutions including Shopify, WordPress WooCommerce, Elementor, and Gutenberg.
            </p>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-red-accent text-red-accent hover:bg-red-accent hover:text-white transition-smooth"
            >
              Contact me!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;