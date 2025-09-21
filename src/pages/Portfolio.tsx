import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform Automation",
      category: "Automation",
      description: "Streamlined order processing and inventory management for a growing retail business, reducing manual work by 80%.",
      image: "/project-1.jpg",
      tech: ["React", "Node.js", "AI"]
    },
    {
      title: "AI-powered Customer Support",
      category: "AI & Machine Learning",
      description: "Implemented intelligent chatbot and support system that handles 70% of customer inquiries automatically.",
      image: "/project-2.jpg",
      tech: ["Python", "NLP", "API"]
    },
    {
      title: "Next-Gen SaaS Web App",
      category: "Web Development",
      description: "Built a scalable multi-tenant platform serving thousands of users with real-time collaboration features.",
      image: "/project-3.jpg",
      tech: ["Next.js", "PostgreSQL", "AWS"]
    }
  ];

  const clients = [
    { name: "TechStart Inc.", logo: "/client-1.png" },
    { name: "Growth Co.", logo: "/client-2.png" },
    { name: "Innovation Labs", logo: "/client-3.png" },
    { name: "Future Systems", logo: "/client-4.png" },
    { name: "Digital Dynamics", logo: "/client-5.png" },
    { name: "Smart Solutions", logo: "/client-6.png" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Our Work & Clients
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in">
            Showcasing the digital transformations we've delivered for our clients
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Featured Case Studies
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="card-elevated hover-glow group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-sm text-primary font-medium">{project.category}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Trusted by Growing Companies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <Card key={client.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded flex items-center justify-center">
                  <span className="font-bold text-foreground text-center text-sm">
                    {client.name}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help you achieve your digital transformation goals
          </p>
          <Button size="lg" className="hover-glow">
            Work With Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;