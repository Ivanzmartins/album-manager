import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";
import { toast } from "react-toastify";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useAdminAlbums } from "@/hooks/useAdminAlbuns";
import { uploadPhoto } from "@/api/uploadPhoto";
import { fileToBase64 } from "@/lib/imgToBase64";

export const PhotoUpload = () => {
  const [albumId, setAlbumId] = useState("");
  const [newAlbumTitle, setNewAlbumTitle] = useState("");
  const [isCreatingNewAlbum, setIsCreatingNewAlbum] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const albums = useAdminAlbums();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Por favor, selecione um arquivo de imagem");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      if (!selectedFile) {
        toast.error("No file selected");
        return;
      }

      if (!isCreatingNewAlbum && !albumId) {
        toast.error("Select an album to the photo");
        return;
      }

      if (isCreatingNewAlbum && !newAlbumTitle.trim()) {
        toast.error("Type a title for the new album");
        return;
      }

      const base64 = await fileToBase64(selectedFile);

      await uploadPhoto({
        base64,
        userId: 1,
        albumId: isCreatingNewAlbum ? undefined : Number(albumId),
        newAlbumTitle: isCreatingNewAlbum ? newAlbumTitle.trim() : undefined,
      });

      toast.success("Photo uploaded successfully!");

      setAlbumId("");
      setNewAlbumTitle("");
      setIsCreatingNewAlbum(false);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar a foto");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto bg-photo-card border-photo-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Upload className="h-5 w-5" />
          <span>Upload new photo</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>File:</Label>
            <Input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              className="mt-1"
              accept="image/*"
              disabled={isUploading}
            />
            {selectedFile && (
              <p className="text-sm text-muted-foreground mt-1">
                Selected: {selectedFile.name} (
                {(selectedFile.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label>Album</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsCreatingNewAlbum(!isCreatingNewAlbum)}
                className="flex items-center space-x-1"
                disabled={isUploading}
              >
                <Plus className="h-3 w-3" />
                <span>
                  {isCreatingNewAlbum ? "Select existing" : "Create new"}
                </span>
              </Button>
            </div>

            {isCreatingNewAlbum ? (
              <Input
                type="text"
                value={newAlbumTitle}
                onChange={(e) => setNewAlbumTitle(e.target.value)}
                placeholder="Title:"
                disabled={isUploading}
              />
            ) : (
              <Select
                value={albumId}
                onValueChange={setAlbumId}
                disabled={isUploading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an album" />
                </SelectTrigger>
                <SelectContent>
                  {albums.map((album) => (
                    <SelectItem key={album.id} value={album.id.toString()}>
                      {album.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isUploading || !selectedFile}
          >
            {isUploading ? "Uploading..." : "Upload Photo"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
