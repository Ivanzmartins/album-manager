import { useAppData } from "./useAppData";

export function useUserAlbums(userId: string) {
  const albums = useAppData().albums;
  return albums.filter((a) => a.userId === userId);
}
