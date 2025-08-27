import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "TypeScript", "Tailwind CSS", "Bootstrap", "Responsive Design"]
  },
  {
    title: "Backend & CMS",
    skills: ["PHP", "WordPress", "Custom Themes", "Plugin Development", "MySQL", "RESTful APIs"]
  },
  {
    title: "eCommerce Platforms",
    skills: ["Shopify", "WooCommerce", "Shopify Plus", "Custom Stores", "Payment Integration", "Inventory Management"]
  },
  {
    title: "Page Builders & Tools",
    skills: ["Elementor", "Gutenberg", "ACF", "Figma", "Git", "npm/yarn", "Webpack"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-tech-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="moving-blob" style={{ top: '10%', right: '20%', animationDelay: '-3s' }}></div>
        <div className="moving-blob" style={{ bottom: '10%', left: '20%', animationDelay: '-8s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Comprehensive skillset covering modern web development and eCommerce technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`group bg-gradient-card border-0 shadow-neon hover:shadow-neon-purple hover:-translate-y-3 hover:scale-105 transition-all duration-500 animate-fade-in-up animate-delay-${(index + 1) * 200}`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;