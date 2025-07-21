import { useAppData } from "./useAppData";
import { useMemo } from "react";

export function useUserAlbums(userId: string) {
  const { albums, refresh } = useAppData();

  const userAlbums = useMemo(() => {
    return albums.filter((a) => a.userId === userId);
  }, [albums, userId]);

  return {
    albums: userAlbums,
    refreshAlbums: refresh,
  };
}
export function useAlbumPhotos(albumId: string) {
  const { photos } = useAppData();

  return useMemo(() => {
    return photos.filter((p) => p.albumId === albumId);
  }, [photos, albumId]);
}
