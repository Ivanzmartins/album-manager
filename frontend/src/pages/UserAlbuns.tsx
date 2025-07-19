import { User } from "@/types/User";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { User as UserIcon, Mail, ArrowLeft } from "lucide-react";
import { mockAlbums } from "@/data/mockAlbuns";
import { AlbumCard } from "@/components/AlbumCard";
import { Button } from "@/components/ui/button";
import { mockUsers } from "@/data/mockUsers";

interface LocationState {
  user: User;
}

const UserAlbums = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState | undefined;
  const user = state?.user || mockUsers.find((u) => u.id === userId);

  if (!user) {
    return (
      <div className="min-h-screen bg-photo-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">User not found</h1>
          <Button onClick={() => navigate("/")} className="mt-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Users
          </Button>
        </div>
      </div>
    );
  }

  const userAlbums = mockAlbums.filter((album) => album.userId === user.id);

  return (
    <div className="min-h-screen bg-photo-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Usuários
        </Button>
        <div className="bg-photo-card rounded-lg p-6 mb-8 shadow-card border border-photo-border">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-2xl font-bold flex items-center space-x-2">
                <UserIcon className="h-6 w-6" />
                <span>{user.username}</span>
              </h1>
              <p className="text-muted-foreground flex items-center space-x-2 mt-1">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Albums</h2>
          {userAlbums.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userAlbums.map((album) => (
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
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No albums found for this user.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAlbums;
