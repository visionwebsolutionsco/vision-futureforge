// src/pages/Home.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Bot, Cog } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServicesBentoGrid } from "@/components/BentoGrid";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const Home = () => {

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
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From web development to AI integration, we provide end-to-end solutions that scale with your business
            </p>
          </div>
          
          <ServicesBentoGrid />
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