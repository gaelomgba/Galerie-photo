
import { photos } from "@/data/photos";

// Fonction pour obtenir la meilleure photo selon un intervalle de temps
export function getBestPhoto(period) {
  // Déterminer la date limite selon la période
  const now = new Date();
  let dateLimit = new Date();
  
  switch (period) {
    case 'day':
      dateLimit.setDate(now.getDate() - 1);
      break;
    case 'week':
      dateLimit.setDate(now.getDate() - 7);
      break;
    case 'month':
      dateLimit.setMonth(now.getMonth() - 1);
      break;
    case 'year':
      dateLimit.setFullYear(now.getFullYear() - 1);
      break;
    default:
      dateLimit = new Date(0); // Date très ancienne pour tout inclure
  }

  // Filtrer les photos selon la période et trier par nombre de likes
  const filteredPhotos = photos
    .filter(photo => new Date(photo.createdAt) >= dateLimit)
    .sort((a, b) => (b.likes - b.dislikes) - (a.likes - a.dislikes));
  
  // Retourner la meilleure photo ou null si aucune
  return filteredPhotos.length > 0 ? filteredPhotos[0] : null;
}

// Fonction pour obtenir les meilleures photos pour toutes les périodes
export function getBestPhotos() {
  return {
    day: getBestPhoto('day'),
    week: getBestPhoto('week'),
    month: getBestPhoto('month'),
    year: getBestPhoto('year')
  };
}
