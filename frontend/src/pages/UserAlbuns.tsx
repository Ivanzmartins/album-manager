import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, User as UserIcon, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AlbumCard } from "@/components/AlbumCard";
import type { User } from "@/types/User";
import { useUserById } from "@/hooks/useUsers";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { Album } from "@/types/Album";
import { updateAlbum } from "@/api/editAlbum";
import { useUserAlbums } from "@/hooks/useAlbumPhotos";
import { deleteAlbum } from "@/api/deleteAlbum";

interface LocationState {
  user: User;
}

const UserAlbums = () => {
  const { userId = "" } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | undefined;

  const userFromHook = useUserById(Number(userId));
  const user = state?.user ?? userFromHook;
  const { albums, refreshAlbums } = useUserAlbums(Number(userId));
  const [editingAlbumId, setEditingAlbumId] = useState<number | null>(null);
  const [albumTitle, setAlbumTitle] = useState("");
  const [albumDescription, setAlbumDescription] = useState("");

  const isAdmin = userId === "1";

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

  const handleEditAlbum = (album: Album) => {
    setEditingAlbumId(album.id);
    setAlbumTitle(album.title);
    setAlbumDescription(album.description || "");
  };

  const handleSaveAlbum = async () => {
    if (!editingAlbumId) return;

    try {
      if (!albumTitle.trim()) {
        toast.error("O título do álbum não pode estar vazio");
        return;
      }

      await updateAlbum({
        id: editingAlbumId,
        title: albumTitle.trim(),
        description: albumDescription.trim(),
      });

      toast.success("Álbum atualizado com sucesso!");
      setEditingAlbumId(null);
      refreshAlbums();
    } catch (error) {
      console.error("Failed to update album:", error);
      toast.error("Falha ao atualizar o álbum");
    }
  };

  const handleDeleteAlbum = async (albumId: number) => {
    try {
      await deleteAlbum(albumId);
      toast.success("Álbum atualizado com sucesso!");
      refreshAlbums();
    } catch (error) {
      console.error(error);
      toast.error("Falha ao deletar o álbum");
    }
  };

  return (
    <div className="min-h-screen bg-photo-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Users
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

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Albums</h2>
        </div>

        {albums.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {albums.map((album) => (
              <div key={album.id} className="relative">
                {editingAlbumId === album.id ? (
                  <div className="bg-photo-card p-4 rounded-lg border shadow-card space-y-4">
                    <Input
                      value={albumTitle}
                      onChange={(e) => setAlbumTitle(e.target.value)}
                      placeholder="Título do álbum"
                    />
                    <Input
                      value={albumDescription}
                      onChange={(e) => setAlbumDescription(e.target.value)}
                      placeholder="Descrição do álbum"
                    />
                    <div className="flex gap-2">
                      <Button onClick={handleSaveAlbum} size="sm">
                        Salvar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingAlbumId(null)}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <AlbumCard
                      album={album}
                      onClick={() =>
                        navigate(`/users/${user.id}/albums/${album.id}/photos`)
                      }
                    />
                    {isAdmin && (
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 bg-background/80"
                          onClick={() => handleEditAlbum(album)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="h-8 w-8 p-0 bg-background/80"
                          onClick={() => handleDeleteAlbum(album.id)}
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
            Nenhum álbum encontrado.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserAlbums;
