import { api } from "@/api/api";

export async function deletePhoto(id: string) {
  try {
    await api.delete(`/photos/${id}`);
  } catch (e) {
    console.log(e);
  }
}
