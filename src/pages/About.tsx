import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Eye, HandHeart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex challenges."
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Every solution we build is designed to grow with your business, ensuring long-term value and flexibility."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We believe in clear communication, honest feedback, and keeping you informed throughout every project."
    },
    {
      icon: HandHeart,
      title: "Partnership",
      description: "We're not just a service provider – we're your technology partner, invested in your success."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Who We Are
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in">
            A team of developers, designers, and strategists passionate about transforming businesses through technology
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Vision Web Solutions is a team of developers, designers, and strategists passionate about transforming businesses through technology. We combine modern web design, advanced automation, and cutting-edge AI to help startups and enterprises thrive in the digital age.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the belief that technology should empower growth, not complicate it, we work closely with our clients to understand their unique challenges and deliver solutions that make a real impact. From innovative startups to established enterprises, we help organizations leverage software, automation, and AI to accelerate their growth and stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="card-elevated text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To democratize access to cutting-edge technology solutions, empowering businesses of all sizes to compete in the digital landscape. We believe that with the right technology partner, any organization can achieve extraordinary growth and innovation.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;