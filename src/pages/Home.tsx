import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Bot, Cog } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built for growth and scalability with modern technologies."
    },
    {
      icon: Bot,
      title: "Automation & AI",
      description: "Streamline operations with intelligent workflows and AI-powered solutions."
    },
    {
      icon: Cog,
      title: "Custom Software",
      description: "Tailored solutions designed to meet your unique business requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Transforming Businesses Through Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in three core areas that drive digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      <Footer />
    </div>
  );
};

export default Home;