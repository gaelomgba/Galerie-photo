
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import PhotoDetail from "@/components/PhotoDetail";
import { getPhotoById } from "@/data/photos";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const photo = id ? getPhotoById(id) : undefined;
  
  useEffect(() => {
    if (!photo && !isLoading) {
      navigate("/", { replace: true });
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [photo, navigate, isLoading]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="animate-pulse w-12 h-12 rounded-full bg-muted"></div>
      </div>
    );
  }
  
  if (!photo) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header showBackButton title={photo.title} />
      
      <main className="min-h-screen">
        <PhotoDetail photo={photo} />
      </main>
    </div>
  );
};

export default Detail;
