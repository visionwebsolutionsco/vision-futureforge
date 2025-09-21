import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,999",
    period: "one-time",
    description: "Perfect for small businesses and startups",
    features: [
      "Custom website design",
      "Mobile responsive",
      "Basic SEO optimization",
      "Contact form integration",
      "3 months support",
      "SSL certificate",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$7,999",
    period: "one-time",
    description: "Ideal for growing companies",
    features: [
      "Everything in Starter",
      "E-commerce functionality",
      "CMS integration",
      "Advanced SEO",
      "Analytics setup",
      "6 months support",
      "Performance optimization",
      "Basic automation tools",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "For large organizations",
    features: [
      "Everything in Growth",
      "Custom software development",
      "AI & machine learning",
      "Advanced automation",
      "API integrations",
      "12 months support",
      "Dedicated project manager",
      "Training & documentation",
    ],
    popular: false,
  },
];

export const PricingTable = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our commitment to quality and excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative card-elevated hover-glow ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period !== "quote" && (
                    <span className="text-muted-foreground ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full ${
                    plan.popular ? 'hover-glow' : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <Link to="/contact">
                    {plan.name === "Enterprise" ? "Get Quote" : "Get Started"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need something custom? 
            <Link to="/contact" className="text-primary hover:underline ml-1">
              Let's talk about your specific requirements.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};