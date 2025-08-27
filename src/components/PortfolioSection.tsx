import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Shopify",
    description: "Modern Shopify store with custom theme development, advanced product filtering, and integrated payment solutions.",
    image: "/api/placeholder/400/300",
    technologies: ["Shopify", "Liquid", "JavaScript", "CSS3"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "React Dashboard",
    category: "React",
    description: "Comprehensive admin dashboard with real-time analytics, data visualization, and responsive design.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "WordPress CMS",
    category: "WordPress",
    description: "Custom WordPress theme with Elementor integration, advanced custom fields, and SEO optimization.",
    image: "/api/placeholder/400/300",
    technologies: ["WordPress", "PHP", "Elementor", "ACF"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Restaurant Website",
    category: "Web Development",
    description: "Modern restaurant website with online ordering system, menu management, and table reservations.",
    image: "/api/placeholder/400/300",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "React",
    description: "Creative portfolio website with smooth animations, dark mode toggle, and contact form integration.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "TypeScript", "Framer Motion", "EmailJS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "WooCommerce Store",
    category: "WordPress",
    description: "Complete WooCommerce solution with custom checkout, inventory management, and payment gateway integration.",
    image: "/api/placeholder/400/300",
    technologies: ["WooCommerce", "WordPress", "PHP", "MySQL"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const categories = ["All", "Shopify", "React", "WordPress", "Web Development"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-portfolio-bg to-tech-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="moving-blob" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="moving-blob" style={{ top: '70%', right: '10%', animationDelay: '-7s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Featured <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Showcase of my best work across different technologies and platforms
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`transition-all duration-300 animate-scale-in animate-delay-${(index + 1) * 100} ${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-neon' 
                  : 'border-primary/30 text-foreground hover:border-primary hover:text-primary'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group bg-card-bg border-0 shadow-card hover:shadow-neon transition-all duration-500 overflow-hidden animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-primary/60 text-6xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-glow animate-scale-in animate-delay-600"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;