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
    <section className="py-20 px-6 bg-tech-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skillset covering modern web development and eCommerce technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient border-0 shadow-card hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white transition-smooth cursor-default"
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