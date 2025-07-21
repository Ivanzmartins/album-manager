import { api } from "@/api/api";
import { toast } from "react-toastify";

export async function updateAlbum({ id, title, description }) {
  try {
    await api.patch(`/albums/${id}`, {
      title,
      description,
    });
  } catch (e) {
    console.log(e);
  }
}
