export interface Album {
  id: string;
  title: string;
  description?: string;
  userId: string;
  photoCount: number;
  coverPhoto?: string;
  createdAt: string;
}
