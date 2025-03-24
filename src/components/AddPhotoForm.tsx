
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Image, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { photos } from "@/data/photos";

const formSchema = z.object({
  title: z.string().min(3, { message: "Le titre doit contenir au moins 3 caractères" }),
  description: z.string().min(10, { message: "La description doit contenir au moins 10 caractères" }),
  src: z.string().url({ message: "Veuillez entrer une URL valide" }),
  photographer: z.string().min(2, { message: "Le nom du photographe est requis" }),
  tags: z.string().optional(),
});

const AddPhotoForm = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      src: "",
      photographer: "",
      tags: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Dans un cas réel, ceci serait une requête API
    const newPhoto = {
      id: (photos.length + 1).toString(),
      title: values.title,
      description: values.description,
      src: values.src,
      alt: values.title,
      width: 1000, // Valeurs par défaut pour la demo
      height: 800,
      photographer: values.photographer,
      tags: values.tags ? values.tags.split(",").map(tag => tag.trim()) : [],
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
    form.reset();
    
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
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre</FormLabel>
                  <FormControl>
                    <Input placeholder="Titre de la photo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description de la photo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="src"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL de l'image</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="photographer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Photographe</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom du photographe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (séparés par des virgules)</FormLabel>
                  <FormControl>
                    <Input placeholder="nature, architecture, minimalisme" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                Annuler
              </Button>
              <Button type="submit">Ajouter</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPhotoForm;
