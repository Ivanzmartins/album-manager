export const mockAlbum = {
  id: 1,
  title: "Album 1",
  description: "Descrição",
  userId: 123,
  createdAt: new Date(),
  updatedAt: new Date(),
  user: { id: 123, username: "ivan", email: "ivan@email.com", albums: [] },
  photos: [],
};

export const mockPhoto = {
  id: 1,
  title: "Photo 1",
  description: "Descrição",
  base64: "base64string",
  uploadedAt: new Date(),
  albumId: "1",
  album: mockAlbum,
};
