import { useParams, useNavigate } from "react-router-dom";

import { useAlbumPhotos } from "@/hooks/useAlbumPhotos";
import { mockAlbums } from "@/data/mockAlbuns";
import { PhotoCard } from "@/components/PhotoCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FolderOpen, User } from "lucide-react";
import { useUserById } from "@/hooks/useUsers";

const AlbumPhotos = () => {
  const { userId = "", albumId = "" } = useParams();
  const navigate = useNavigate();

  const user = useUserById(userId);
  const album = mockAlbums.find((a) => a.id === albumId);
  const photos = useAlbumPhotos(albumId);

  if (!user || !album) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-muted-foreground">
          Álbum ou usuário não encontrado.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-photo-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(`/users/${userId}/albums`)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Álbuns
        </Button>

        <div className="bg-photo-card p-6 mb-8 rounded-lg shadow-card border">
          <div className="flex items-center text-sm text-muted-foreground mb-2 gap-2">
            <User className="h-4 w-4" />
            <span>{user.username}</span>
          </div>

          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FolderOpen className="h-5 w-5" />
            {album.title}
          </h1>

          {album.description && (
            <p className="text-muted-foreground mt-1">{album.description}</p>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4 text-foreground">Fotos</h2>
        {photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Nenhuma foto encontrada.
          </p>
        )}
      </div>
    </div>
  );
};

export default AlbumPhotos;
