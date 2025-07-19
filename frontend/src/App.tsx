import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import UserAlbums from "./pages/UserAlbuns";
import AlbumPhotos from "./pages/AlbumPhotos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId/albums" element={<UserAlbums />} />
        <Route
          path="/users/:userId/albums/:albumId/photos"
          element={<AlbumPhotos />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
