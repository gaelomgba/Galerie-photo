
export interface Photo {
  id: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  photographer: string;
  tags: string[];
  likes: number;
  dislikes: number;
  userId?: string;
  createdAt: Date;
}
