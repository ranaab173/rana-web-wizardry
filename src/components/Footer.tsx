import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, MapPin, Phone, Send, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-tech-bg to-portfolio-bg pt-20 pb-8 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="moving-blob" style={{ top: '10%', left: '20%', animationDelay: '-4s' }}></div>
        <div className="moving-blob" style={{ bottom: '20%', right: '15%', animationDelay: '-9s' }}></div>
        <div className="moving-blob" style={{ top: '60%', left: '60%', animationDelay: '-12s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <div className="text-4xl font-bold mb-6 animate-fade-in-up">
              <span className="text-foreground">Rana</span>
              <span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg animate-fade-in-up animate-delay-200">
              Expert web developer specializing in modern, responsive websites and eCommerce solutions. 
              I create digital experiences that drive results and exceed expectations.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Send className="w-4 h-4 mr-2" />
                Let's Work Together
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animate-delay-400">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Links</h3>
            <div className="space-y-4">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up animate-delay-500">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground text-lg">rana@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground text-lg">Available Worldwide</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:rana@example.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card-bg border border-primary/20 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-neon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-card rounded-2xl p-8 mb-16 border border-primary/20 animate-fade-in-up animate-delay-600">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to get the latest updates on web development trends and my projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none text-foreground"
              />
              <Button className="bg-primary hover:bg-primary/80 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/20">
          <p className="text-muted-foreground flex items-center gap-2 text-lg mb-4 md:mb-0">
            Made with <Heart className="w-5 h-5 text-primary animate-pulse" /> by Rana Abubakar © 2024
          </p>
          
          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;