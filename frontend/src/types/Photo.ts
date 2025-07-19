export interface Photo {
  id: string;
  title: string;
  description?: string;
  url: string;
  albumId: string;
  userId: string;
  uploadedAt: string;
}
