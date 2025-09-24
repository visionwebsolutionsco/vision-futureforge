import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import { 
  Database, 
  Lock, 
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
  Bot
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
  <div className="absolute right-2 -top-8 h-[300px] w-full scale-50 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-75">
    <OrbitingSkills />
  </div>
);

const AuthVisual = () => (
  <div className="w-20 h-16 grid grid-cols-2 gap-1">
    <div className="bg-muted/40 rounded p-1 text-xs">
      <div className="text-muted-foreground text-[10px] mb-0.5">Email</div>
      <div className="bg-background/60 rounded px-1 py-0.5 text-[9px]">user@ex.com</div>
    </div>
    <div className="bg-muted/40 rounded p-1 text-xs">
      <div className="text-muted-foreground text-[10px] mb-0.5">Password</div>
      <div className="bg-background/60 rounded px-1 py-0.5 text-[9px]">••••••••</div>
    </div>
  </div>
);

const EdgeFunctionsVisual = () => (
  <div className="w-20 h-12 relative">
    <div className="bg-muted/30 rounded p-2 text-xs font-mono h-full">
      <div className="text-green-400 text-[10px]">$ deploy</div>
      <div className="text-muted-foreground text-[9px]">Deploying...</div>
    </div>
  </div>
);

const StorageVisual = () => (
  <div className="w-16 h-12 grid grid-cols-3 gap-0.5">
    {Array.from({ length: 9 }).map((_, i) => (
      <div key={i} className="aspect-square bg-muted/30 rounded flex items-center justify-center">
        {i < 3 ? (
          <ImageIcon className="w-2 h-2 text-muted-foreground" />
        ) : i < 6 ? (
          <FileText className="w-2 h-2 text-muted-foreground" />
        ) : (
          <Video className="w-2 h-2 text-muted-foreground" />
        )}
      </div>
    ))}
  </div>
);

const RealtimeVisual = () => (
  <div className="w-16 h-12 relative">
    <div className="bg-muted/30 rounded p-2 flex items-center gap-1 h-full">
      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
      <div className="text-[9px] text-muted-foreground">Live</div>
    </div>
  </div>
);

const VectorVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="w-20 h-16 relative" ref={containerRef}>
      <div className="flex size-full max-h-[60px] max-w-[80px] flex-col items-stretch justify-between gap-2">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="size-6">
            <Database className="w-3 h-3 text-primary" />
          </Circle>
          <Circle ref={div5Ref} className="size-6">
            <Bot className="w-3 h-3 text-primary" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Circle ref={div4Ref} className="size-7">
            <Brain className="w-4 h-4 text-primary" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="size-6">
            <Cpu className="w-3 h-3 text-primary" />
          </Circle>
          <Circle ref={div3Ref} className="size-6">
            <Network className="w-3 h-3 text-primary" />
          </Circle>
        </div>
      </div>
      
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-30}
        endYOffset={-5}
        pathWidth={1}
        pathOpacity={0.4}
        gradientStartColor="#3b82f6"
        gradientStopColor="#8b5cf6"
        duration={2}
        delay={0.2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        pathWidth={1}
        pathOpacity={0.4}
        gradientStartColor="#3b82f6"
        gradientStopColor="#8b5cf6"
        duration={2.5}
        delay={0.4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={30}
        endYOffset={5}
        pathWidth={1}
        pathOpacity={0.4}
        gradientStartColor="#3b82f6"
        gradientStopColor="#8b5cf6"
        duration={3}
        delay={0.6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-30}
        endYOffset={-5}
        reverse
        pathWidth={1}
        pathOpacity={0.4}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#3b82f6"
        duration={2.2}
        delay={0.3}
      />
    </div>
  );
};

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
      name: "Authentication & Security",
      description: "Secure user management with enterprise-grade security and role-based access control.",
      Icon: Lock,
      background: <AuthVisual />,
      href: "/services/authentication",
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
      background: <VectorVisual />,
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
