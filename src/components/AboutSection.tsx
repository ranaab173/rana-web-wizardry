import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My Portfolio
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-transparent">
            <CardContent className="p-0">
              <p className="text-lg text-gray-custom leading-relaxed text-center">
                Greetings, I'm Rana Abubakar, a seasoned web developer with extensive experience in the dynamic IT industry. 
                My expertise lies in crafting cutting-edge, responsive web applications and eCommerce solutions for diverse platforms, 
                utilizing modern technologies like HTML, CSS, JavaScript, PHP, React, and more. I take immense pride in my work, 
                striving to develop applications that are not only efficient but also user-friendly, catering to the diverse needs of clients globally.
              </p>
              <br />
              <p className="text-lg text-gray-custom leading-relaxed text-center">
                Having successfully delivered projects to satisfied clients worldwide, I've gained valuable experience collaborating 
                with individuals from various cultures. My journey has taken me from local development projects to platforms like Fiverr and Upwork, 
                eventually leading me to work with international companies. This diverse exposure has enriched my understanding of different 
                perspectives and enhanced my ability to adapt to varied work environments.
              </p>
              <br />
              <p className="text-lg text-gray-custom leading-relaxed text-center">
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