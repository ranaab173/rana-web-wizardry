import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import freshbiteEcommerce from "@/assets/freshbite-ecommerce.jpg";

const portfolioProjects = [
  {
    id: 1,
    title: "Hadia Perfumes",
    category: "E-commerce",
    description: "Elegant perfume e-commerce website with modern design, product showcase, and responsive layout.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://ranaab173.github.io/hadia-perfumes/",
    githubUrl: "https://github.com/ranaab173/hadia-perfumes"
  },
  {
    id: 2,
    title: "Creative Portfolio",
    category: "Portfolio",
    description: "Modern creative portfolio website showcasing professional work with stunning visual effects and animations.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animations"],
    liveUrl: "https://ranaab173.github.io/creative-portfolio-website/",
    githubUrl: "https://github.com/ranaab173/creative-portfolio-website"
  },
  {
    id: 3,
    title: "Nexus Digital",
    category: "Business",
    description: "Professional digital agency website with modern design, service showcase, and client testimonials.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://ranaab173.github.io/nexus-digital-website/",
    githubUrl: "https://github.com/ranaab173/nexus-digital-website"
  },
  {
    id: 4,
    title: "FreshBite E-commerce",
    category: "E-commerce",
    description: "Food delivery e-commerce platform with cart functionality, menu browsing, and order management.",
    image: freshbiteEcommerce,
    technologies: ["HTML5", "CSS3", "JavaScript", "E-commerce"],
    liveUrl: "https://ranaab173.github.io/freshbite-ecommerce/",
    githubUrl: "https://github.com/ranaab173/freshbite-ecommerce"
  },
  {
    id: 5,
    title: "Yoga Instructor",
    category: "Health & Fitness",
    description: "Beautiful yoga instructor website with class schedules, instructor profiles, and booking system.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Wellness"],
    liveUrl: "https://ranaab173.github.io/yoga-instructor-web/",
    githubUrl: "https://github.com/ranaab173/yoga-instructor-web"
  },
  {
    id: 6,
    title: "Modern CV Template",
    category: "Template",
    description: "Professional CV template with modern design, downloadable format, and customizable sections.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
    technologies: ["HTML5", "CSS3", "Template Design", "PDF"],
    liveUrl: "https://ranaab173.github.io/modern-cv-template/",
    githubUrl: "https://github.com/ranaab173/modern-cv-template"
  }
];

const categories = ["All", "E-commerce", "Portfolio", "Business", "Health & Fitness", "Template"];

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
        <div className="text-center mb-16 animate-fade-in-up animate-delay-100">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-in-right animate-delay-200">
            Featured <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-zoom-in animate-delay-300">
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
              className={`group bg-card-bg border-0 shadow-neon hover:shadow-neon-blue hover:-translate-y-2 transition-all duration-500 overflow-hidden animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-white border-white hover:bg-white hover:text-black shadow-button"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-white border-white hover:bg-white hover:text-black shadow-button"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
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