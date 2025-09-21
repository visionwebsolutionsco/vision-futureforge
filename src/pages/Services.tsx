import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingTable } from "@/components/PricingTable";
import { Code, Bot, Brain, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built for growth and scalability. We use modern frameworks and technologies to deliver fast, secure, and user-friendly solutions."
    },
    {
      icon: Settings,
      title: "Automation Solutions",
      description: "Streamline your operations with intelligent workflows. We help you automate repetitive tasks, integrate systems, and optimize business processes."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Leverage innovative AI tools for smarter business decisions. From chatbots to predictive analytics, we implement AI solutions that drive results."
    },
    {
      icon: Bot,
      title: "Custom Software Development",
      description: "Tailored solutions for unique business needs. We develop custom applications, integrations, and systems designed specifically for your organization."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in">
            Our services are designed to take your business to the next level
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.2}
                large
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTable />

      <Footer />
    </div>
  );
};

export default Services;