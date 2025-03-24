
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import PhotoGrid from "@/components/PhotoGrid";
import BestPhotos from "@/components/BestPhotos";
import ThematicJourneys from "@/components/ThematicJourneys";
import AddPhotoForm from "@/components/AddPhotoForm";
import { photos } from "@/data/photos";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <section className="container mx-auto py-10">
          <div 
            className={cn(
              "text-center mb-16 px-4 transition-all transform",
              "duration-700 ease-out",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-4 animate-slide-up">
              Collection de photographies
            </div>
            <h1 className="text-4xl font-medium tracking-tight mb-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Galerie minimaliste
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl animate-slide-up" style={{ animationDelay: "200ms" }}>
              Une collection de photographies aux lignes épurées et compositions élégantes, 
              capturant la beauté dans la simplicité.
            </p>
          </div>
          
          {/* Section des meilleures photos */}
          <BestPhotos />
          
          {/* Section des parcours thématiques */}
          <ThematicJourneys />
          
          {/* Section de la grille de photos */}
          <div className="mt-12">
            <h2 className="text-2xl font-medium mb-6 text-center">Toutes les photos</h2>
            <PhotoGrid photos={photos} />
          </div>
        </section>
      </main>
      
      <AddPhotoForm />
    </div>
  );
};

export default Index;
