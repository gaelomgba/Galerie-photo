
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-xl font-medium">
          PhotoGalerie
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Accueil
          </Link>
          <Link
            to="/collections"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Collections
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            À propos
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col py-4 px-6 space-y-3">
          <Link
            to="/"
            className="py-2 text-sm font-medium border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/collections"
            className="py-2 text-sm font-medium border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Collections
          </Link>
          <Link
            to="/about"
            className="py-2 text-sm font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
