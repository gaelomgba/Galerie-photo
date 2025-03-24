
import { Photo } from "@/types/photo";

export const photos: Photo[] = [
  {
    id: "1",
    title: "Architecture minimaliste",
    description: "Lignes épurées et formes géométriques d'un bâtiment moderne",
    src: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Architecture minimaliste moderne",
    width: 1000,
    height: 1500,
    photographer: "Samuel Zeller",
    tags: ["architecture", "minimalisme", "moderne"],
    likes: 24,
    dislikes: 3,
    createdAt: new Date("2023-09-15")
  },
  {
    id: "2",
    title: "Contemplation océanique",
    description: "Vue apaisante sur l'océan au coucher du soleil",
    src: "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Océan au coucher du soleil",
    width: 1000,
    height: 667,
    photographer: "Guillaume Bolduc",
    tags: ["océan", "coucher de soleil", "nature"],
    likes: 42,
    dislikes: 5,
    createdAt: new Date("2023-10-05")
  },
  {
    id: "3",
    title: "Géométrie urbaine",
    description: "Motifs géométriques créés par l'architecture urbaine moderne",
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Géométrie urbaine",
    width: 1000,
    height: 750,
    photographer: "Aleks Dahlberg",
    tags: ["ville", "architecture", "géométrie"],
    likes: 18,
    dislikes: 2,
    createdAt: new Date("2023-08-25")
  },
  {
    id: "4",
    title: "Sérénité forestière",
    description: "Calme et harmonie d'une forêt de pins dans la brume matinale",
    src: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Forêt de pins",
    width: 1000,
    height: 667,
    photographer: "Alex Talmon",
    tags: ["forêt", "nature", "brume"],
    likes: 36,
    dislikes: 1,
    createdAt: new Date("2023-11-12")
  },
  {
    id: "5",
    title: "Structure minérale",
    description: "Formation rocheuse aux textures et lignes fascinantes",
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Formation rocheuse",
    width: 1000,
    height: 750,
    photographer: "Ricardo Gomez Angel",
    tags: ["nature", "roche", "texture"],
    likes: 29,
    dislikes: 4,
    createdAt: new Date("2023-07-30")
  },
  {
    id: "6",
    title: "Vagues abstraites",
    description: "Lignes courbes créant un motif abstrait harmonieux",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Motif abstrait harmonieux",
    width: 1000,
    height: 667,
    photographer: "Sean O.",
    tags: ["abstrait", "lignes", "harmonie"],
    likes: 51,
    dislikes: 7,
    createdAt: new Date("2023-10-18")
  },
  {
    id: "7",
    title: "Équilibre architectural",
    description: "L'équilibre parfait entre lignes verticales et horizontales",
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Architecture équilibrée",
    width: 1000,
    height: 1500,
    photographer: "Simon Zhu",
    tags: ["architecture", "équilibre", "design"],
    likes: 33,
    dislikes: 3,
    createdAt: new Date("2023-09-29")
  },
  {
    id: "8",
    title: "Reflets urbains",
    description: "La ville se reflétant dans les vitres d'un gratte-ciel",
    src: "https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Reflets urbains",
    width: 1000,
    height: 668,
    photographer: "Chris Barbalis",
    tags: ["ville", "reflets", "moderne"],
    likes: 27,
    dislikes: 2,
    createdAt: new Date("2023-12-05")
  },
  {
    id: "9",
    title: "Simplicité hivernale",
    description: "Paysage minimaliste d'hiver enneigé",
    src: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Paysage d'hiver minimaliste",
    width: 1000,
    height: 563,
    photographer: "Simon Matzinger",
    tags: ["hiver", "neige", "minimalisme"],
    likes: 38,
    dislikes: 1,
    createdAt: new Date("2023-11-28")
  }
];

export const getPhotoById = (id: string): Photo | undefined => {
  return photos.find(photo => photo.id === id);
};
