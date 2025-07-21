import { useAppData } from "./useAppData";
import { useMemo } from "react";

export function useUserAlbums(userId: number) {
  const { albums, refresh } = useAppData();

  const userAlbums = useMemo(() => {
    return albums.filter((a) => a.userId === userId);
  }, [albums, userId]);

  return {
    albums: userAlbums,
    refreshAlbums: refresh,
  };
}
export function useAlbumPhotos(albumId: number) {
  const { photos, refresh } = useAppData();

  const albumPhotos = useMemo(() => {
    return photos.filter((p) => p.albumId === albumId);
  }, [photos, albumId]);

  return {
    photos: albumPhotos,
    refreshPhotos: refresh,
  };
}
