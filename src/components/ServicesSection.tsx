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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group card-gradient border-0 shadow-card hover:shadow-glow transition-smooth cursor-pointer"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-smooth w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
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