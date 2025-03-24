
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  showBackButton?: boolean;
  title?: string;
}

const Header = ({ showBackButton = false, title = "Galerie Photo" }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBackButton && (
            <Link 
              to="/" 
              className="p-2 rounded-full hover:bg-black/5 transition-colors"
              aria-label="Retour"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
          )}
          <h1 className="text-lg font-medium tracking-tight">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
