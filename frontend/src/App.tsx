import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import UserAlbums from "./pages/UserAlbuns";
import AlbumPhotos from "./pages/AlbumPhotos";
import { Navigation } from "./components/Navigation";
import Upload from "./pages/Upload";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId/albums" element={<UserAlbums />} />
        <Route
          path="/users/:userId/albums/:albumId/photos"
          element={<AlbumPhotos />}
        />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer position="top-center" autoClose={5000} />
  </QueryClientProvider>
);

export default App;
