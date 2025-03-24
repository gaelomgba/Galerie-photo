
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { generateThematicJourneys } from "@/utils/themeUtils";
import AnimatedImage from "./AnimatedImage";
import { cn } from "@/lib/utils";
import { Images, ArrowRight } from "lucide-react";

const ThematicJourneys = () => {
  const [journeys, setJourneys] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simuler un chargement pour l'animation
    setTimeout(() => {
      setJourneys(generateThematicJourneys());
      setIsLoaded(true);
    }, 400);
  }, []);

  if (!isLoaded || journeys.length === 0) {
    return (
      <div className="w-full py-8 flex justify-center">
        <div className="animate-pulse w-12 h-12 rounded-full bg-muted"></div>
      </div>
    );
  }

  return (
    <div className="w-full py-12 animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-medium mb-4 flex items-center justify-center gap-2">
          <Images className="h-6 w-6 text-primary" />
          Parcours thématiques
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Explorez nos collections par thème et laissez-vous guider par une expérience visuelle immersive
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {journeys.map((journey, index) => (
          <Link
            key={journey.id}
            to={`/theme/${journey.id}`}
            className={cn(
              "group overflow-hidden block relative rounded-lg shadow-sm hover:shadow-md transition-all",
              "transform hover:-translate-y-1 bg-card",
              "animate-scale-in"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <AnimatedImage 
                src={journey.coverImage} 
                alt={journey.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                priority={index < 3}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-1">{journey.name}</h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {journey.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium bg-secondary px-2 py-1 rounded-full">
                  {journey.photoCount} photos
                </span>
                <span className="text-primary text-sm font-medium flex items-center group-hover:underline">
                  Explorer 
                  <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ThematicJourneys;
