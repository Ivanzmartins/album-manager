import { Card, CardContent } from "@/components/ui/card";
import { Album } from "@/types/Album";
import { Camera } from "lucide-react";

interface AlbumCardProps {
  album: Album;
  onClick: () => void;
}

export const AlbumCard = ({ album, onClick }: AlbumCardProps) => {
  return (
    <Card
      className="cursor-pointer transition-all duration-200 hover:shadow-hover hover:scale-105 bg-photo-card border-photo-border"
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        {album.coverPhoto ? (
          <img
            src={album.coverPhoto}
            alt={album.title}
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Camera className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground truncate">
          {album.title}
        </h3>
        {album.description && (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {album.description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
