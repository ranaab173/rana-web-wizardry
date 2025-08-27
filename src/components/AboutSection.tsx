import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-card-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="moving-blob" style={{ top: '20%', left: '10%', animationDelay: '-1s' }}></div>
        <div className="moving-blob" style={{ bottom: '30%', right: '20%', animationDelay: '-6s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up animate-delay-100">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-in-left animate-delay-200">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto animate-slide-in-right animate-delay-300">
          <Card className="border-0 bg-gradient-card shadow-neon animate-scale-in animate-delay-400">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6 animate-fade-in-up animate-delay-500">
                Greetings, I'm <span className="text-primary font-semibold">Rana Abubakar</span>, a seasoned web developer with extensive experience in the dynamic IT industry. 
                My expertise lies in crafting cutting-edge, responsive web applications and eCommerce solutions for diverse platforms, 
                utilizing modern technologies like HTML, CSS, JavaScript, PHP, React, and more.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6 animate-slide-in-left animate-delay-700">
                Having successfully delivered projects to satisfied clients worldwide, I've gained valuable experience collaborating 
                with individuals from various cultures. My journey has taken me from local development projects to platforms like Fiverr and Upwork, 
                eventually leading me to work with international companies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-center animate-zoom-in animate-delay-900">
                Beyond coding, I find joy in continuous learning and staying updated with the latest web development trends. 
                My passion for creating digital solutions that make a positive impact drives me to constantly improve and deliver 
                exceptional results that exceed client expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;