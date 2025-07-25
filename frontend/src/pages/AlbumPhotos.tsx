import { useParams, useNavigate } from "react-router-dom";
import { useAlbumPhotos, useUserAlbums } from "@/hooks/useAlbumPhotos";
import { PhotoCard } from "@/components/PhotoCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FolderOpen, User, Edit, Trash2 } from "lucide-react";
import { useUserById } from "@/hooks/useUsers";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import type { Photo } from "@/types/Photo";
import { deletePhoto } from "@/api/deletePhoto";
import { updatePhoto } from "@/api/updatePhoto";

const AlbumPhotos = () => {
  const { userId = "", albumId = "" } = useParams();
  const navigate = useNavigate();
  const user = useUserById(Number(userId));
  const { albums } = useUserAlbums(Number(userId));
  const album = albums.find((a) => a.id === Number(albumId));
  const { photos, refreshPhotos } = useAlbumPhotos(Number(albumId));

  const [editingPhotoId, setEditingPhotoId] = useState<number | null>(null);
  const [photoEdits, setPhotoEdits] = useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });

  const isAdmin = userId === "1";

  if (!user || !album) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-muted-foreground">
          Álbum ou usuário não encontrado.
        </p>
      </div>
    );
  }

  const handleEditPhoto = (photo: Photo) => {
    setEditingPhotoId(photo.id);
    setPhotoEdits({
      title: photo.title,
      description: photo.description || "",
    });
  };

  const handleSavePhoto = async (photoId: number) => {
    try {
      if (!photoEdits.title.trim()) {
        toast.error("O título da foto não pode estar vazio");
        return;
      }

      await updatePhoto({
        id: photoId,
        title: photoEdits.title.trim(),
        description: photoEdits.description.trim(),
      });

      toast.success("Foto atualizada com sucesso!");
      setEditingPhotoId(null);
      refreshPhotos();
    } catch (error) {
      toast.error("Falha ao atualizar a foto");
      console.error("Update error:", error);
    }
  };

  const handleDeletePhoto = async (photoId: number) => {
    try {
      await deletePhoto(photoId);
      toast.success("Foto deletada com sucesso!");
      refreshPhotos();
    } catch (error) {
      toast.error("Falha ao deletar a foto");
      console.error("Delete error:", error);
    }
  };

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

        {photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative">
                {editingPhotoId === photo.id ? (
                  <div className="bg-photo-card p-4 rounded-lg space-y-2">
                    <Input
                      value={photoEdits.title}
                      onChange={(e) =>
                        setPhotoEdits({ ...photoEdits, title: e.target.value })
                      }
                    />
                    <Textarea
                      value={photoEdits.description}
                      onChange={(e) =>
                        setPhotoEdits({
                          ...photoEdits,
                          description: e.target.value,
                        })
                      }
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleSavePhoto(photo.id)}
                      >
                        Salvar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingPhotoId(null)}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <PhotoCard photo={photo} />
                    {isAdmin && (
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 bg-background/80"
                          onClick={() => handleEditPhoto(photo)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="h-8 w-8 p-0 bg-background/80"
                          onClick={() => handleDeletePhoto(photo.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
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
