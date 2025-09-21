// src/pages/Home.tsx
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
    <div className="min-h-screen w-full relative bg-background">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, hsl(var(--primary) / 0.12), transparent 60%), hsl(var(--background))",
        }}
      />
      
      <div className="relative z-10">
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
    </div>
  );
};

export default Home;