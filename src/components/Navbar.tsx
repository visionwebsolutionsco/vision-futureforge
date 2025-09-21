import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GlassEffect } from "@/components/ui/liquid-glass";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Header - Fixed with proper responsive spacing */}
      <div className="sticky top-4 z-[9999] px-4 sm:px-6 lg:px-8 hidden md:block">
        <GlassEffect
          className={`mx-auto w-full rounded-3xl transition-transform duration-300 hover:scale-105
            ${isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"} py-2`}
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            perspective: "1000px",
          }}
        >
          {/* Balanced 3-col grid: left 1fr | center auto | right 1fr */}
          <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2">
            {/* Left: Logo + name */}
            <Link
              to="/"
              className={`flex items-center gap-2 ${isScrolled ? "ml-2" : ""}`}
            >
              <img
                src={"/Logo.png"} // or import from assets
                alt="Vision Web Solutions Logo"
                className="w-8 h-8 object-contain"
              />
              {!isScrolled && (
                <span className="font-bold text-lg transition-colors">Vision Web Solutions</span>
              )}
            </Link>

            {/* Center: Pages — perfectly centered because column is 'auto' */}
            <nav className="flex items-center gap-1 justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right: CTA — pinned to the right */}
            <div className="ml-auto justify-self-end flex items-center gap-4 overflow-visible">
              <Link
                to="/contact"
                className="shrink-0 whitespace-nowrap rounded-full font-bold relative
                 cursor-pointer hover:scale-105 transition duration-200
                 inline-block text-center
                 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground
                 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]
                 px-4 py-2 text-sm "
              >
                Get Started
              </Link>
            </div>
          </div>
        </GlassEffect>
      </div>

      {/* Mobile Header - Already properly spaced */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <Link
          to="/"
          className="flex items-center justify-center gap-2"
        >
          <div className="w-7 h-7 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">V</span>
          </div>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-left px-4 py-3 text-lg font-medium transition-colors rounded-lg hover:bg-background/50 ${location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-3">
                <Link
                  to="/about"
                  className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50 cursor-pointer"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-3 text-lg font-bold text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};