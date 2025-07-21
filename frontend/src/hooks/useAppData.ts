import { useEffect, useState } from "react";
import { mockAlbums } from "@/data/mockAlbuns";
import { mockPhotos } from "@/data/mockPhotos";
import type { User } from "@/types/User";
import type { Album } from "@/types/Album";
import type { Photo } from "@/types/Photo";
import { api } from "@/api/api";

export function useAppData() {
  const [users, setUsers] = useState<User[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // Mock version
    setAlbums(mockAlbums);
    setPhotos(mockPhotos);

    // TODO:
    Promise.all([
      api.get("/users"),
      // axios.get("/albums"),
      // axios.get("/photos")
    ]).then(([u]) => {
      setUsers(u.data);
      // setAlbums(a.data);
      // setPhotos(p.data);
      console.log(u);
    });
  }, []);
  return { users, albums, photos };
}
