import { api } from "@/api/api";

export async function deletePhoto(id: number) {
  try {
    await api.delete(`/photos/${id}`);
  } catch (e) {
    console.log(e);
  }
}
