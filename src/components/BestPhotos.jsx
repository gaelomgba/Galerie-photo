
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBestPhotos } from "@/utils/photoUtils";
import AnimatedImage from "./AnimatedImage";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";

const BestPhotos = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("day");
  const [bestPhotos, setBestPhotos] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simuler un chargement pour l'animation
    setTimeout(() => {
      setBestPhotos(getBestPhotos());
      setIsLoaded(true);
    }, 300);
  }, []);

  if (!isLoaded || !bestPhotos) {
    return (
      <div className="w-full py-8 flex justify-center">
        <div className="animate-pulse w-12 h-12 rounded-full bg-muted"></div>
      </div>
    );
  }

  const periods = [
    { id: "day", label: "Aujourd'hui" },
    { id: "week", label: "Cette semaine" },
    { id: "month", label: "Ce mois" },
    { id: "year", label: "Cette année" }
  ];

  const currentBestPhoto = bestPhotos[selectedPeriod];

  return (
    <div className="w-full py-8 animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-medium mb-4 flex items-center justify-center gap-2">
          <Award className="h-6 w-6 text-yellow-500" />
          Photos à l'honneur
        </h2>
        
        <div className="flex justify-center gap-2 mb-6">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={cn(
                "px-4 py-1 rounded-full text-sm transition-colors",
                selectedPeriod === period.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 flex justify-center">
        {currentBestPhoto ? (
          <Link
            to={`/photo/${currentBestPhoto.id}`}
            className={cn(
              "glass-card group overflow-hidden block relative w-full max-w-xl aspect-[4/3] transition-all",
              "transform hover:shadow-md hover:-translate-y-1 animate-scale-in"
            )}
          >
            <AnimatedImage 
              src={currentBestPhoto.src} 
              alt={currentBestPhoto.alt} 
              className="w-full h-full object-cover transition-all"
              priority={true}
            />
            <div className="absolute top-2 right-2 bg-yellow-500 text-white rounded-full px-2 py-1 text-xs font-medium flex items-center gap-1">
              <Award className="h-3 w-3" />
              Meilleure photo
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300">
              <h3 className="text-white font-medium">{currentBestPhoto.title}</h3>
              <p className="text-white/80 text-sm">
                {currentBestPhoto.photographer}
              </p>
              <div className="flex items-center mt-2">
                <span className="bg-white/20 text-white text-xs rounded-full px-2 py-0.5">
                  {currentBestPhoto.likes} likes
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="text-center p-8 bg-muted/20 rounded-lg">
            <p>Aucune photo disponible pour cette période</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestPhotos;
