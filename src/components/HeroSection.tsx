import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 warm-gradient"></div>
      </div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full hero-gradient opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-lg hero-gradient opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-warm opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Social Links - Top */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary transition-smooth hover:scale-110 shadow-card">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary transition-smooth hover:scale-110 shadow-card">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:rana@example.com"
             className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-foreground hover:text-primary transition-smooth hover:scale-110 shadow-card">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground font-medium">Hello, I'm</p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Rana Abubakar<span className="text-primary">.</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Expert Web Developer & eCommerce Specialist
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a skilled web developer with expertise in HTML, CSS, JavaScript, PHP, React, and modern responsive web applications. 
            Specialized in eCommerce solutions including Shopify, WordPress WooCommerce, Elementor, and Gutenberg.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="hero" size="lg" className="group">
              View My Work
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="elegant" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;