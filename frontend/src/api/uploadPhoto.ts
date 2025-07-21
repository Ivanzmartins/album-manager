import { api } from "@/api/api";

export async function uploadPhoto({
  base64,
  userId,
  albumId,
  newAlbumTitle,
}: {
  base64: string;
  userId: number;
  albumId: number;
  newAlbumTitle?: string;
}) {
  try {
    const response = await api.post("/photos", {
      base64,
      userId,
      albumId,
      newAlbumTitle,
    });
    return response.data;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
}
