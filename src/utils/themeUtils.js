
import { photos } from "@/data/photos";

// Fonction pour extraire tous les tags uniques de la collection de photos
export function getAllTags() {
  const tagsSet = new Set();
  photos.forEach(photo => {
    photo.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
}

// Fonction pour générer des parcours thématiques
export function generateThematicJourneys() {
  const allTags = getAllTags();
  
  // Créer des parcours thématiques en regroupant les photos par tag principal
  const journeys = allTags.map(tag => {
    const relatedPhotos = photos.filter(photo => photo.tags.includes(tag));
    
    // Ne créer un parcours que s'il y a au moins 2 photos
    if (relatedPhotos.length >= 2) {
      return {
        id: `theme-${tag}`,
        name: tag.charAt(0).toUpperCase() + tag.slice(1), // Première lettre en majuscule
        description: `Découvrez notre collection sur le thème "${tag}"`,
        coverImage: relatedPhotos[0].src,
        photoCount: relatedPhotos.length,
        photos: relatedPhotos
      };
    }
    return null;
  }).filter(Boolean); // Enlever les parcours null
  
  return journeys;
}
