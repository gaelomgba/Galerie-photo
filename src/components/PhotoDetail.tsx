
import { useEffect, useState } from "react";
import { Photo } from "@/types/photo";
import AnimatedImage from "./AnimatedImage";
import { cn } from "@/lib/utils";

interface PhotoDetailProps {
  photo: Photo;
}

const PhotoDetail = ({ photo }: PhotoDetailProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col lg:flex-row gap-8 items-start">
      <div 
        className={cn(
          "lg:flex-1 glass-card overflow-hidden",
          "transition-all duration-500 ease-out transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <AnimatedImage 
          src={photo.src} 
          alt={photo.alt} 
          className="w-full aspect-auto max-h-[80vh] object-contain"
          priority
        />
      </div>
      
      <div 
        className={cn(
          "lg:w-1/3 space-y-6",
          "transition-all duration-500 delay-200 ease-out transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">{photo.title}</h1>
          <p className="text-muted-foreground">{photo.description}</p>
        </div>
        
        <div className="glass-card p-4 space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Photographe</h3>
            <p>{photo.photographer}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Dimensions</h3>
            <p>{photo.width} × {photo.height}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Tags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {photo.tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-full bg-secondary text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
