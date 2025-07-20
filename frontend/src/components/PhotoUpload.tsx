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

export const PhotoUpload = () => {
  const [albumId, setAlbumId] = useState("");
  const [newAlbumTitle, setNewAlbumTitle] = useState("");
  const [isCreatingNewAlbum, setIsCreatingNewAlbum] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const albums = useAdminAlbums();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.error("Nenhum arquivo selecionado");
      return;
    }

    if (!isCreatingNewAlbum && !albumId) {
      toast.error("Selecione um aĺbum para a foto");
      return;
    }

    if (isCreatingNewAlbum && !newAlbumTitle) {
      toast.error("Selecione um álbum existente ou crie um novo");
      return;
    }

    try {
      await uploadPhoto({
        file: selectedFile,
        albumId: isCreatingNewAlbum ? undefined : albumId,
        newAlbumTitle: isCreatingNewAlbum ? newAlbumTitle : undefined,
      });

      toast.success("Foto enviada com sucesso!");

      setAlbumId("");
      setNewAlbumTitle("");
      setIsCreatingNewAlbum(false);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      toast.error("Erro ao enviar a foto");
    }
  };
  return (
    <Card className="max-w-2xl mx-auto bg-photo-card border-photo-border">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Upload className="h-5 w-5" />
          <span>Adicionar uma foto</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="hover:pointer">
            <Label>Arquivo:</Label>
            <Input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              className="mt-1"
            />
            {selectedFile && (
              <p className="text-sm text-muted-foreground mt-1">
                Selecionado: {selectedFile.name}
              </p>
            )}
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label>Álbum</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsCreatingNewAlbum(!isCreatingNewAlbum)}
                className="flex items-center space-x-1"
              >
                <Plus className="h-3 w-3" />
                <span>
                  {isCreatingNewAlbum ? "Selecione existente" : "Criar novo"}
                </span>
              </Button>
            </div>
            {isCreatingNewAlbum ? (
              <Input
                type="text"
                value={newAlbumTitle}
                onChange={(e) => setNewAlbumTitle(e.target.value)}
                placeholder="Digite um título"
              />
            ) : (
              <Select value={albumId} onValueChange={setAlbumId}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um álbum" />
                </SelectTrigger>
                <SelectContent>
                  {albums.map((album) => (
                    <SelectItem key={album.id} value={album.id}>
                      {album.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <Button type="submit" className="w-full">
            Upload Foto
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
