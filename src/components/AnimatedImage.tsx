
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const AnimatedImage = ({ src, alt, className, priority = false }: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      const currentRef = document.getElementById(`image-${src.replace(/[^\w]/g, '-')}`);
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [src, priority]);

  return (
    <div
      id={`image-${src.replace(/[^\w]/g, '-')}`}
      className={cn(
        "relative overflow-hidden bg-gray-100",
        className
      )}
    >
      {isInView && (
        <>
          <div 
            className={cn(
              "absolute inset-0 bg-gray-200 animate-pulse",
              isLoaded ? "opacity-0" : "opacity-100"
            )}
            style={{ transition: "opacity 0.3s ease" }}
          />
          <img
            src={src}
            alt={alt}
            className={cn(
              "w-full h-full object-cover transition-all duration-500 image-transition",
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
            )}
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedImage;
