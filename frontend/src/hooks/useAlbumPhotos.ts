import { useEffect, useState } from "react";
import { mockPhotos } from "@/data/mockPhotos";
import type { Photo } from "@/types/Photo";

export function useAlbumPhotos(albumId: string) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const filtered = mockPhotos.filter((p) => p.albumId === albumId);
    setPhotos(filtered);
    // TODO: axios.get(`/api/albums/${albumId}/photos`).then(...)
  }, [albumId]);

  return photos;
}
