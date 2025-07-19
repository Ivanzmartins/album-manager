import { PhotoCard } from "@/components/PhotoCard";
import { Button } from "@/components/ui/button";
import { mockAlbums } from "@/data/mockAlbuns";
import { mockPhotos } from "@/data/mockPhotos";
import { mockUsers } from "@/data/mockUsers";
import { ArrowLeft, FolderOpen, User } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const UserAlbums = () => {
  const { userId, albumId } = useParams();
  const navigate = useNavigate();

  const user = mockUsers.find((u) => u.id === userId);
  const album = mockAlbums.find((a) => a.id === albumId);
  const albumPhotos = mockPhotos.filter((photo) => photo.albumId === albumId);
  return (
    <div className="min-h-screen bg-photo-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(`/users/${userId}/albums`)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para
        </Button>
        <div className="bg-photo-card rounded-lg p-6 mb-8 shadow-card border border-photo-border">
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                <User className="h-4 w-4" />
                <span>{user.username}</span>
              </div>

              <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2 mb-2">
                <FolderOpen className="h-6 w-6" />
                <span>{album.title}</span>
              </h1>

              {album.description && (
                <p className="text-muted-foreground mb-3">
                  {album.description}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Photos</h2>

          {albumPhotos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {albumPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No photos found in this album.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAlbums;
