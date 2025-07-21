import { useAppData } from "./useAppData";
import { useMemo } from "react";
import type { Photo } from "@/types/Photo";

export function useAlbumPhotos(albumId: string) {
  const { photos } = useAppData();

  return useMemo(() => {
    return photos.filter((p) => p.albumId === albumId);
  }, [photos, albumId]);
}
