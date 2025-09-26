import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import { 
  Database, 
  Globe, 
  FolderOpen, 
  Zap, 
  Code2,
  FileText,
  Image as ImageIcon,
  Video,
  Cpu,
  Network,
  Brain,
  Bot,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";
import { useRef, forwardRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex size-8 items-center justify-center rounded-full border-2 bg-card p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";


// Visual Components
const DatabaseVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60" />
    <div className="absolute right-2 -top-8 h-[300px] w-full scale-50 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-75">
      <OrbitingSkills />
    </div>
    <div className="absolute bottom-4 right-4 w-24 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl" />
  </div>
);

const AuthVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />
    <div className="absolute top-6 right-6 w-32 h-20">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-2 shadow-lg">
          <div className="text-muted-foreground text-[10px] mb-1 font-medium">Email</div>
          <div className="bg-primary/10 rounded px-2 py-1 text-[9px] text-foreground">user@ex.com</div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-2 shadow-lg">
          <div className="text-muted-foreground text-[10px] mb-1 font-medium">Password</div>
          <div className="bg-primary/10 rounded px-2 py-1 text-[9px] text-foreground">••••••••</div>
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500/20 rounded-full blur-md" />
      <div className="absolute -top-1 -left-1 w-6 h-6 bg-blue-500/20 rounded-full blur-md" />
    </div>
  </div>
);

const EdgeFunctionsVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />
    <div className="absolute top-6 right-6 w-28 h-16">
      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 text-xs font-mono h-full shadow-lg">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
          <div className="text-green-400 text-[10px] font-semibold">$ deploy</div>
        </div>
        <div className="text-muted-foreground text-[9px]">Deploying...</div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-transparent rounded-full mt-2 animate-pulse"></div>
      </div>
      <div className="absolute -bottom-1 -right-1 w-10 h-6 bg-violet-500/20 rounded-full blur-lg" />
    </div>
  </div>
);

const StorageVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/10" />
    <div className="absolute top-6 right-6 w-20 h-16">
      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-2 shadow-lg">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200">
              {i < 3 ? (
                <ImageIcon className="w-2 h-2 text-primary" />
              ) : i < 6 ? (
                <FileText className="w-2 h-2 text-accent" />
              ) : (
                <Video className="w-2 h-2 text-secondary" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500/20 rounded-full blur-md" />
      <div className="absolute -top-1 -left-1 w-6 h-6 bg-pink-500/20 rounded-full blur-md" />
    </div>
  </div>
);

const RealtimeVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-teal-500/10" />
    <div className="absolute top-6 right-6 w-20 h-14">
      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 flex items-center gap-2 h-full shadow-lg">
        <div className="relative">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
        </div>
        <div className="text-[10px] text-foreground font-medium">Live</div>
      </div>
      <div className="absolute -bottom-1 -right-1 w-8 h-6 bg-green-500/20 rounded-full blur-lg" />
      <div className="absolute top-0 -left-2 w-4 h-4 bg-teal-500/20 rounded-full blur-md" />
    </div>
  </div>
);

const SocialMediaVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
    <div className="absolute top-4 right-4 w-32 h-20">
      <div className="grid grid-cols-3 gap-2 p-2">
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
          <Facebook className="w-3 h-3 text-blue-600" />
        </div>
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
          <Twitter className="w-3 h-3 text-sky-500" />
        </div>
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
          <Instagram className="w-3 h-3 text-pink-500" />
        </div>
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
          <Linkedin className="w-3 h-3 text-blue-700" />
        </div>
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
          <Youtube className="w-3 h-3 text-red-600" />
        </div>
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-2 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
          <Share2 className="w-3 h-3 text-violet-500" />
        </div>
      </div>
      <div className="absolute -bottom-2 -right-2 w-10 h-8 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-full blur-lg" />
      <div className="absolute -top-1 -left-1 w-6 h-6 bg-purple-500/20 rounded-full blur-md" />
    </div>
  </div>
);

const AIVisual = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-cyan-500/10" />
    <div className="absolute top-4 right-4 w-36 h-24">
      {/* Neural network nodes */}
      <div className="relative w-full h-full">
        {/* Input layer */}
        <div className="absolute left-2 top-2 space-y-2">
          <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Hidden layer */}
        <div className="absolute left-1/2 top-1 space-y-1.5 transform -translate-x-1/2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        </div>
        
        {/* Output layer */}
        <div className="absolute right-2 top-4">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 96">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(139 92 246)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(34 211 238)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Input to hidden connections */}
          <line x1="16" y1="16" x2="72" y2="12" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="16" y1="24" x2="72" y2="18" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="16" y1="32" x2="72" y2="24" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="16" y1="24" x2="72" y2="30" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.6" />
          
          {/* Hidden to output connections */}
          <line x1="72" y1="12" x2="128" y2="32" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="72" y1="18" x2="128" y2="32" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="72" y1="24" x2="128" y2="32" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="72" y1="30" x2="128" y2="32" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.6" />
        </svg>
        
        {/* AI chip representation */}
        <div className="absolute bottom-2 left-2 w-8 h-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-md shadow-lg">
          <div className="grid grid-cols-2 gap-0.5 p-1 h-full">
            <div className="bg-violet-400/30 rounded-sm"></div>
            <div className="bg-blue-400/30 rounded-sm"></div>
            <div className="bg-cyan-400/30 rounded-sm"></div>
            <div className="bg-purple-400/30 rounded-sm"></div>
          </div>
        </div>
        
        {/* Floating data particles */}
        <div className="absolute top-8 left-8 w-1 h-1 bg-violet-300 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-12 left-16 w-1 h-1 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-6 right-8 w-1 h-1 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '1.6s' }}></div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute -bottom-2 -right-2 w-12 h-8 bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-lg" />
      <div className="absolute -top-1 -left-1 w-8 h-6 bg-violet-500/20 rounded-full blur-md" />
    </div>
  </div>
);

const DataAPIsVisual = () => (
  <div className="w-24 h-12 space-y-0.5">
    {["users", "products", "orders"].map((endpoint, i) => (
      <div key={i} className="flex items-center gap-1 text-[9px]">
        <Database className="w-2 h-2 text-muted-foreground" />
        <span className="text-muted-foreground">{endpoint}</span>
        <span className="text-primary font-mono">/api/v1</span>
      </div>
    ))}
  </div>
);

export const ServicesBentoGrid = () => {
  const services = [
    {
      name: "Web Development",
      description: "Every project is built with modern frameworks, ensuring scalability and performance.",
      Icon: Code2,
      background: <DatabaseVisual />,
      href: "/services/web-development",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2"
    },
    {
      name: "Social Media Presence",
      description: "Build and manage your social media presence across all major platforms with integrated tools.",
      Icon: Share2,
      background: <SocialMediaVisual />,
      href: "/services/social-media",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1"
    },
    {
      name: "Cloud Infrastructure",
      description: "Deploy and scale your applications without managing servers or infrastructure.",
      Icon: Globe,
      background: <EdgeFunctionsVisual />,
      href: "/services/cloud-infrastructure",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1"
    },
    {
      name: "File Management",
      description: "Store, organize, and serve large files, from documents to media assets.",
      Icon: FolderOpen,
      background: <StorageVisual />,
      href: "/services/file-management",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1"
    },
    {
      name: "Real-time Features",
      description: "Build interactive experiences with real-time data synchronization and live updates.",
      Icon: Zap,
      background: <RealtimeVisual />,
      href: "/services/realtime",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1"
    },
    {
      name: "AI Integration",
      description: "Integrate machine learning models to enhance your applications with intelligent features.",
      Icon: Brain,
      background: <AIVisual />,
      href: "/services/ai-integration",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2"
    }
  ];

  return (
    <BentoGrid>
      {services.map((service, index) => (
        <BentoCard
          key={service.name}
          name={service.name}
          description={service.description}
          Icon={service.Icon}
          background={service.background}
          href={service.href}
          cta={service.cta}
          className={service.className}
        />
      ))}
    </BentoGrid>
  );
};
