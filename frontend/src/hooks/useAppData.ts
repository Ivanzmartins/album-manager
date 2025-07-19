import { useEffect, useState } from "react";
import { mockUsers } from "@/data/mockUsers";
import { mockAlbums } from "@/data/mockAlbuns";
import { mockPhotos } from "@/data/mockPhotos";
import type { User } from "@/types/User";
import type { Album } from "@/types/Album";
import type { Photo } from "@/types/Photo";

export function useAppData() {
  const [users, setUsers] = useState<User[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // Mock version
    setUsers(mockUsers);
    setAlbums(mockAlbums);
    setPhotos(mockPhotos);

    // TODO:
    // Promise.all([
    //   axios.get("/users"),
    //   axios.get("/albums"),
    //   axios.get("/photos")
    // ]).then(([u, a, p]) => {
    //   setUsers(u.data);
    //   setAlbums(a.data);
    //   setPhotos(p.data);
    // });
  }, []);

  return { users, albums, photos };
}
