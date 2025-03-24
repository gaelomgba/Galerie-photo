
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Photo } from "@/types/photo";
import AnimatedImage from "./AnimatedImage";
import { cn } from "@/lib/utils";

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  const [visiblePhotos, setVisiblePhotos] = useState<Photo[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation séquentielle pour l'apparition des photos
    const timer = setTimeout(() => {
      setVisiblePhotos(photos.slice(0, 3));
      
      const interval = setInterval(() => {
        setVisiblePhotos(prevPhotos => {
          if (prevPhotos.length >= photos.length) {
            clearInterval(interval);
            return prevPhotos;
          }
          return [...prevPhotos, photos[prevPhotos.length]];
        });
      }, 150);
      
      return () => clearInterval(interval);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [photos]);

  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6"
    >
      {photos.map((photo, index) => {
        const isVisible = visiblePhotos.includes(photo);
        
        return (
          <Link
            key={photo.id}
            to={`/photo/${photo.id}`}
            className={cn(
              "glass-card group overflow-hidden block relative aspect-[3/4] sm:aspect-[1/1] transition-all",
              "transform hover:shadow-md hover:-translate-y-1",
              isVisible ? "opacity-100 animate-scale-in" : "opacity-0"
            )}
            style={{ 
              animationDelay: `${index * 100}ms`,
              transitionDuration: "350ms",
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
            }}
          >
            <AnimatedImage 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-full transition-all"
              priority={index < 6}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white font-medium truncate">{photo.title}</h3>
              <p className="text-white/80 text-sm truncate">
                {photo.photographer}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PhotoGrid;
