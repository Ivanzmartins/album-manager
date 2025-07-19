import { useParams, useLocation, useNavigate } from "react-router-dom";

import { ArrowLeft, Mail, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlbumCard } from "@/components/AlbumCard";
import type { User } from "@/types/User";
import { useUserById } from "@/hooks/useUsers";
import { useUserAlbums } from "@/hooks/useAlbuns";

interface LocationState {
  user: User;
}

const UserAlbums = () => {
  const { userId = "" } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | undefined;

  const userFromHook = useUserById(userId);
  const user = state?.user ?? userFromHook;
  const albums = useUserAlbums(userId);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Usuário não encontrado</h1>
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-photo-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Usuários
        </Button>

        <div className="bg-photo-card p-6 mb-8 rounded-lg border shadow-card">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            {user.username}
          </h1>
          <p className="text-muted-foreground flex items-center gap-2 mt-1">
            <Mail className="h-4 w-4" />
            {user.email}
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4">Albums</h2>
        {albums.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                album={album}
                onClick={() =>
                  navigate(`/users/${user.id}/albums/${album.id}/photos`)
                }
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Nenhum álbum encontrado.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserAlbums;
