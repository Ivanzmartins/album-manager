import { api } from "@/api/api";

export async function updatePhoto({ id, title, description }) {
  try {
    await api.patch(`/albums/${id}`, {
      title,
      description,
    });
  } catch (e) {
    console.log(e);
  }
}
