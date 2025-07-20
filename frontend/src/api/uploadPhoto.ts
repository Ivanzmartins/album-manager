import axios from "axios";

export async function uploadPhoto({
  file,
  albumId,
  newAlbumTitle,
}: {
  file: File;
  albumId?: string;
  newAlbumTitle?: string;
}): Promise<void> {
  let finalAlbumId = albumId;

  if (!albumId && newAlbumTitle) {
    const res = await axios.post("/api/albums", {
      title: newAlbumTitle,
      userId: "1",
    });
    finalAlbumId = res.data.id;
  }

  const formData = new FormData();
  formData.append("photo", file);
  formData.append("albumId", finalAlbumId!);

  await axios.post("/api/photos", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}
