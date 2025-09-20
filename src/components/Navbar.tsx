import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">CV</span>
            </div>
            <span className="text-2xl font-bold text-gradient-primary">CVJitu</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Fitur
            </a>
            <Link to="/examples" className="text-foreground/80 hover:text-primary transition-colors">
              Template
            </Link>
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
              Cara Kerja
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Login
              </Button>
            </Link>
            <Button className="btn-hero-primary">
              Daftar Gratis
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;