import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-foreground">Rana</span>
              <span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Expert web developer specializing in modern, responsive websites and eCommerce solutions. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-smooth">
                Skills
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-smooth">
                Services
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
            <div className="space-y-2 mb-4">
              <p className="text-muted-foreground">rana@example.com</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-smooth">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:rana@example.com"
                 className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-smooth">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary" /> by Rana Abubakar © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;