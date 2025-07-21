export interface Photo {
  id: number;
  title: string;
  description?: string;
  base64: string;
  albumId: number;
  userId: number;
}
