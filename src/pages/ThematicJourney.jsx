
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import PhotoGrid from "@/components/PhotoGrid";
import { generateThematicJourneys } from "@/utils/themeUtils";
import { ArrowLeft } from "lucide-react";

const ThematicJourney = () => {
  const { id } = useParams();
  const [journey, setJourney] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Charger les données du parcours thématique
    const journeys = generateThematicJourneys();
    const currentJourney = journeys.find(j => j.id === id);
    setJourney(currentJourney);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse w-12 h-12 rounded-full bg-muted"></div>
      </div>
    );
  }

  if (!journey) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Header />
        <main className="pt-20 pb-16 container mx-auto">
          <div className="text-center p-8">
            <h1 className="text-2xl font-medium mb-4">Parcours non trouvé</h1>
            <p className="mb-6">Ce parcours thématique n'existe pas ou a été supprimé.</p>
            <Link to="/" className="text-primary hover:underline flex items-center justify-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <section className="container mx-auto py-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors px-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour à l'accueil
          </Link>
          
          <div className="text-center mb-12 px-4 animate-slide-up">
            <h1 className="text-3xl font-medium tracking-tight mb-3">
              {journey.name}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              {journey.description}
            </p>
          </div>
          
          <PhotoGrid photos={journey.photos} />
        </section>
      </main>
    </div>
  );
};

export default ThematicJourney;
