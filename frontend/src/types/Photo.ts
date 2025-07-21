export interface Photo {
  id: string;
  title: string;
  description?: string;
  base64: string;
  albumId: string;
  userId: string;
}
