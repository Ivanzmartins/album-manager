import { useAppData } from "./useAppData";
import { Album } from "@/types/Album";

export function useAdminAlbums(): Album[] {
  const { albums } = useAppData();
  return albums.filter((album) => album.userId === "1");
}
