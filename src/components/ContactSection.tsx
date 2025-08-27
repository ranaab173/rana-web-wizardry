import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 warm-gradient section-animate">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up animate-delay-100">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-slide-in-left animate-delay-200">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-scale-in animate-delay-300">
            Ready to start your next project? Get in touch and let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 animate-slide-in-right animate-delay-400">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left animate-delay-500">
            <div className="flex items-center space-x-4 animate-fade-in-up animate-delay-600">
              <div className="p-3 rounded-full bg-primary/10 text-primary animate-zoom-in animate-delay-700">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-foreground animate-fade-in-up animate-delay-750">Email</p>
                <p className="text-muted-foreground animate-fade-in-up animate-delay-800">ranairc@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 animate-fade-in-up animate-delay-650">
              <div className="p-3 rounded-full bg-primary/10 text-primary animate-zoom-in animate-delay-750">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-foreground animate-fade-in-up animate-delay-800">Phone</p>
                <p className="text-muted-foreground animate-fade-in-up animate-delay-850">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 animate-fade-in-up animate-delay-700">
              <div className="p-3 rounded-full bg-primary/10 text-primary animate-zoom-in animate-delay-800">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-foreground animate-fade-in-up animate-delay-850">Location</p>
                <p className="text-muted-foreground animate-fade-in-up animate-delay-900">Available Worldwide</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 card-gradient border-0 shadow-card animate-scale-in animate-delay-600">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4 animate-slide-in-left animate-delay-700">
                  <div className="animate-fade-in-up animate-delay-750">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input 
                      placeholder="Your name" 
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div className="animate-fade-in-up animate-delay-800">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                
                <div className="animate-slide-in-right animate-delay-850">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project discussion" 
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                
                <div className="animate-zoom-in animate-delay-900">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full group animate-scale-in animate-delay-1000">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;