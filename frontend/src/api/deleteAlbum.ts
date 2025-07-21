import { api } from "@/api/api";
import { toast } from "react-toastify";

export async function deleteAlbum(id: string) {
  try {
    await api.delete(`/albums/${id}`);
    return true;
  } catch (error) {
    console.error("Failed to delete album:", error);
    return false;
  }
}
