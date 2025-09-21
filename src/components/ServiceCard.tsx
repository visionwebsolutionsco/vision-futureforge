import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  large?: boolean;
}

export const ServiceCard = ({ icon: Icon, title, description, delay = 0, large = false }: ServiceCardProps) => {
  return (
    <Card 
      className={`card-elevated hover-glow h-full transition-all duration-500 ${large ? 'p-2' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <CardHeader className={large ? 'pb-4' : ''}>
        <div className={`${large ? 'w-16 h-16' : 'w-12 h-12'} bg-primary/10 rounded-full flex items-center justify-center mb-4`}>
          <Icon className={`${large ? 'w-8 h-8' : 'w-6 h-6'} text-primary`} />
        </div>
        <CardTitle className={large ? 'text-2xl' : 'text-xl'}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-muted-foreground ${large ? 'text-lg' : ''}`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
};