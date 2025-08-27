import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Code, Palette, Smartphone, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "eCommerce Development",
    description: "Custom Shopify stores, WooCommerce solutions, and complete eCommerce platforms with payment integration and inventory management."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Web Development",
    description: "Modern, responsive websites built with React, PHP, and cutting-edge technologies. Clean code and optimal performance guaranteed."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "WordPress Solutions",
    description: "Custom WordPress themes, plugin development, and full CMS solutions using Elementor, Gutenberg, and advanced custom fields."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring perfect user experience across all devices. Progressive web apps and modern UI/UX implementations."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Website Optimization",
    description: "SEO optimization, performance tuning, and conversion rate optimization to maximize your online presence and business growth."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Maintenance & Support",
    description: "Ongoing website maintenance, security updates, and technical support to keep your digital assets running smoothly."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-card-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="moving-blob" style={{ top: '30%', left: '5%', animationDelay: '-2s' }}></div>
        <div className="moving-blob" style={{ bottom: '20%', right: '10%', animationDelay: '-6s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Services I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Comprehensive web development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group p-8 bg-gradient-card border-0 shadow-neon hover:shadow-neon-blue hover:-translate-y-3 hover:scale-105 transition-all duration-500 animate-fade-in-up animate-delay-${(index + 1) * 150}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 w-fit shadow-lg">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;