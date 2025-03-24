
import { useEffect, useState } from "react";
import AnimatedImage from "./AnimatedImage";
import { cn } from "@/lib/utils";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { photos } from "@/data/photos";

const PhotoDetail = ({ photo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(photo);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Dans un cas réel, ces fonctions feraient des appels API
  const handleLike = () => {
    setCurrentPhoto(prev => {
      const updated = { ...prev, likes: prev.likes + 1 };
      // Update in the photos array too (in a real app this would be an API call)
      const index = photos.findIndex(p => p.id === photo.id);
      if (index !== -1) {
        photos[index] = updated;
      }
      toast({
        title: "Vous avez aimé cette photo",
        description: "Merci pour votre contribution!",
      });
      return updated;
    });
  };

  const handleDislike = () => {
    setCurrentPhoto(prev => {
      const updated = { ...prev, dislikes: prev.dislikes + 1 };
      // Update in the photos array too (in a real app this would be an API call)
      const index = photos.findIndex(p => p.id === photo.id);
      if (index !== -1) {
        photos[index] = updated;
      }
      toast({
        title: "Vous n'avez pas aimé cette photo",
        description: "Merci pour votre retour!",
      });
      return updated;
    });
  };

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
          src={currentPhoto.src} 
          alt={currentPhoto.alt} 
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
          <h1 className="text-2xl font-medium">{currentPhoto.title}</h1>
          <p className="text-muted-foreground">{currentPhoto.description}</p>
        </div>
        
        <div className="glass-card p-4 space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Photographe</h3>
            <p>{currentPhoto.photographer}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Dimensions</h3>
            <p>{currentPhoto.width} × {currentPhoto.height}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Tags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {currentPhoto.tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-full bg-secondary text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="outline" 
                className="flex items-center gap-2" 
                onClick={handleLike}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>{currentPhoto.likes}</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2" 
                onClick={handleDislike}
              >
                <ThumbsDown className="h-4 w-4" />
                <span>{currentPhoto.dislikes}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
