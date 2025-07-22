import { PhotoUpload } from "@/components/PhotoUpload";

const Upload = () => {
  return (
    <div className="min-h-screen bg-photo-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">Upload photo</h1>
          <p className="text-muted-foreground mt-2">
            Upload a photo to an existing album or create a new one
          </p>
        </div>

        <PhotoUpload />
      </div>
    </div>
  );
};

export default Upload;
