import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "Rana delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Digital Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "Working with Rana was a pleasure. He transformed our outdated website into a modern, responsive platform that significantly improved our user engagement."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Studios",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "Rana's WordPress expertise helped us create a stunning portfolio website. His knowledge of Elementor and custom themes is impressive."
  },
  {
    id: 4,
    name: "David Park",
    role: "Product Manager",
    company: "StartupHub",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "The Shopify store Rana built for us increased our conversion rate by 40%. His understanding of e-commerce best practices is remarkable."
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Business Owner",
    company: "Wellness Co.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "Rana created a beautiful, functional website that perfectly captures our brand essence. His communication throughout the project was excellent."
  }
];

const TestimonialsSection = () => {
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="moving-blob" style={{ top: '30%', left: '80%', animationDelay: '-2s' }}></div>
        <div className="moving-blob" style={{ bottom: '20%', left: '10%', animationDelay: '-6s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            What clients say about working with me
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-400">
          <Carousel 
            ref={carouselRef}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className={`h-full bg-gradient-card border-0 shadow-neon hover:shadow-neon-purple hover:-translate-y-2 transition-all duration-500 animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-primary">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                        "{testimonial.text}"
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;