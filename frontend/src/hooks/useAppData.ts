import { useCallback, useEffect, useState } from "react";
import type { User } from "@/types/User";
import type { Album } from "@/types/Album";
import type { Photo } from "@/types/Photo";
import { api } from "@/api/api";

export function useAppData() {
  const [users, setUsers] = useState<User[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [refreshCounter, setRefreshCounter] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const [u, a, p] = await Promise.all([
        api.get("/users"),
        api.get("/albums"),
        api.get("/photos"),
      ]);
      setUsers(u.data);
      setAlbums(a.data);
      setPhotos(p.data);
    } catch (error) {
      console.error("Failed to refresh data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, refreshCounter]);

  const refresh = useCallback(() => {
    setRefreshCounter((prev) => prev + 1);
  }, []);

  return { users, albums, photos, refresh };
}
