import { Album } from "@/types/Album";

export const mockAlbums: Album[] = [
  {
    id: "1",
    title: "Casamento",
    description: "Fotos do casamento",
    userId: "2",
    photoCount: 12,

    createdAt: "2024-01-15",
  },

  {
    id: "5",
    title: "Wildlife Photography",
    description: "Amazing wildlife encounters",
    userId: "3",
    photoCount: 15,
    coverPhoto:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400",
    createdAt: "2024-02-01",
  },
  {
    id: "6",
    title: "Forest Walks",
    description: "Peaceful moments in nature",
    userId: "3",
    photoCount: 9,
    coverPhoto:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
    createdAt: "2024-02-15",
  },
  {
    id: "7",
    title: "Mountain Hiking",
    description: "Adventures in the mountains",
    userId: "3",
    photoCount: 7,
    coverPhoto:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    createdAt: "2024-03-20",
  },
  {
    id: "2",
    title: "Paisagens",
    description: "Paisagens ao redor do mundo",
    userId: "1",
    photoCount: 4,
    coverPhoto:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    createdAt: "2024-03-10",
  },
];
