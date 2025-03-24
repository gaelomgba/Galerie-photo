
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import PhotoDetail from "@/components/PhotoDetail";
import { photos } from "@/data/photos";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler une recherche dans la base de données
    const foundPhoto = photos.find(p => p.id === id);
    
    if (foundPhoto) {
      setPhoto(foundPhoto);
    } else {
      // Rediriger vers 404 si la photo n'existe pas
      navigate("/not-found");
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Header />
        <div className="container mx-auto pt-32 text-center">
          <div className="animate-pulse text-lg">Chargement...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      {photo && <PhotoDetail photo={photo} />}
    </div>
  );
};

export default Detail;
