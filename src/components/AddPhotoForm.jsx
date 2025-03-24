
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { photos } from "@/data/photos";
import { Plus } from "lucide-react";

const AddPhotoForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    src: "",
    photographer: "",
    tags: ""
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title || formData.title.length < 3) {
      newErrors.title = "Le titre doit contenir au moins 3 caractères";
    }
    
    if (!formData.description || formData.description.length < 10) {
      newErrors.description = "La description doit contenir au moins 10 caractères";
    }
    
    if (!formData.src || !formData.src.startsWith("http")) {
      newErrors.src = "Veuillez entrer une URL valide";
    }
    
    if (!formData.photographer || formData.photographer.length < 2) {
      newErrors.photographer = "Le nom du photographe est requis";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Dans un cas réel, ceci serait une requête API
    const newPhoto = {
      id: (photos.length + 1).toString(),
      title: formData.title,
      description: formData.description,
      src: formData.src,
      alt: formData.title,
      width: 1000, // Valeurs par défaut pour la demo
      height: 800,
      photographer: formData.photographer,
      tags: formData.tags ? formData.tags.split(",").map(tag => tag.trim()) : [],
      likes: 0,
      dislikes: 0,
      createdAt: new Date(),
    };

    // Ajouter à la liste (dans un cas réel, ceci serait géré par un API)
    photos.unshift(newPhoto);
    
    toast({
      title: "Photo ajoutée",
      description: "Votre photo a été ajoutée avec succès",
    });
    
    setOpen(false);
    setFormData({
      title: "",
      description: "",
      src: "",
      photographer: "",
      tags: ""
    });
    
    // Force un rechargement de la page pour afficher la nouvelle photo
    navigate(0);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-6 right-6 rounded-full shadow-lg p-3 h-14 w-14 z-10">
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Ajouter une nouvelle photo</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Titre
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className={`w-full p-2 border rounded-md ${errors.title ? "border-red-500" : "border-gray-300"}`}
              placeholder="Titre de la photo"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className={`w-full p-2 border rounded-md ${errors.description ? "border-red-500" : "border-gray-300"}`}
              placeholder="Description de la photo"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="src" className="text-sm font-medium">
              URL de l'image
            </label>
            <input
              id="src"
              name="src"
              type="text"
              className={`w-full p-2 border rounded-md ${errors.src ? "border-red-500" : "border-gray-300"}`}
              placeholder="https://example.com/image.jpg"
              value={formData.src}
              onChange={handleChange}
            />
            {errors.src && <p className="text-xs text-red-500">{errors.src}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="photographer" className="text-sm font-medium">
              Photographe
            </label>
            <input
              id="photographer"
              name="photographer"
              type="text"
              className={`w-full p-2 border rounded-md ${errors.photographer ? "border-red-500" : "border-gray-300"}`}
              placeholder="Nom du photographe"
              value={formData.photographer}
              onChange={handleChange}
            />
            {errors.photographer && <p className="text-xs text-red-500">{errors.photographer}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="tags" className="text-sm font-medium">
              Tags (séparés par des virgules)
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              className="w-full p-2 border rounded-md border-gray-300"
              placeholder="nature, architecture, minimalisme"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" type="button" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button type="submit">Ajouter</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPhotoForm;
