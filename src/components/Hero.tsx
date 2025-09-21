import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundPathsCanvas } from "@/components/ui/background-paths";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-white dark:bg-neutral-950">
      {/* animated background */}
      <div className="absolute inset-0">
        <BackgroundPathsCanvas />
      </div>

      {/* optional scrim for readability (tweak or remove) */}
      <div className="absolute inset-0 bg-white/50 dark:bg-black/35" />

      {/* content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            We help startups and enterprises leverage software, automation, and AI to accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="hover-glow text-lg px-8 py-6">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-slide-up">
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="p-6">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};
