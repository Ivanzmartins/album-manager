import { useEffect, useState } from "react";
import type { User } from "@/types/User";
import type { Album } from "@/types/Album";
import type { Photo } from "@/types/Photo";
import { api } from "@/api/api";

export function useAppData() {
  const [users, setUsers] = useState<User[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    Promise.all([
      api.get("/users"),
      api.get("/albums"),
      api.get("/photos"),
    ]).then(([u, a, p]) => {
      setUsers(u.data);
      setAlbums(a.data);
      setPhotos(p.data);
    });
  }, []);
  return { users, albums, photos };
}
