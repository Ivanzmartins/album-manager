import { Card } from "@/components/ui/card";
import { Photo } from "@/types/Photo";

interface PhotoCardProps {
  photo: Photo;
}

export const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-hover hover:scale-105 bg-photo-card border-photo-border">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={photo.base64}
          alt={photo.title}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-foreground truncate">
          {photo.title}
        </h3>
        {photo.description && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {photo.description}
          </p>
        )}
      </div>
    </Card>
  );
};
