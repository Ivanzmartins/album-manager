import { PhotoService } from "../../service/photo.service";
import { mockPhoto, mockAlbum } from "../../mocks/repository";

const mockPhotoRepo = {
  find: jest.fn(),
  findOneBy: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
};

const mockAlbumRepo = {
  findOneBy: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
};

jest.mock("../../config/database", () => ({
  AppDataSource: {
    getRepository: jest.fn((entity) => {
      if (entity.name === "Photo") return mockPhotoRepo;
      if (entity.name === "Album") return mockAlbumRepo;
    }),
  },
}));

describe("PhotoService", () => {
  beforeEach(() => jest.clearAllMocks());

  test("getAllPhotos", async () => {
    mockPhotoRepo.find.mockResolvedValue([mockPhoto]);
    const photos = await PhotoService.getAllPhotos();
    expect(photos).toEqual([mockPhoto]);
  });

  test("getAlbumById success", async () => {
    mockAlbumRepo.findOneBy.mockResolvedValue(mockAlbum);
    const album = await PhotoService.getAlbumById(1, 123);
    expect(album).toEqual(mockAlbum);
  });

  test("getAlbumById failure", async () => {
    mockAlbumRepo.findOneBy.mockResolvedValue(null);
    await expect(PhotoService.getAlbumById(99, 123)).rejects.toThrow(
      "Album not found"
    );
  });

  test("createPhotoInAlbum", async () => {
    const data = { ...mockPhoto, album: mockAlbum };
    mockPhotoRepo.create.mockReturnValue(data);
    mockPhotoRepo.save.mockResolvedValue(data);
    const result = await PhotoService.createPhotoInAlbum(data);
    expect(result).toEqual(data);
  });

  test("createPhoto with existing album", async () => {
    mockAlbumRepo.findOneBy.mockResolvedValue(mockAlbum);
    mockPhotoRepo.create.mockReturnValue(mockPhoto);
    mockPhotoRepo.save.mockResolvedValue(mockPhoto);

    const result = await PhotoService.createPhoto({
      base64: "base64string",
      userId: 123,
      albumId: 1,
    });

    expect(result).toEqual(mockPhoto);
  });

  test("createPhoto with new album", async () => {
    mockAlbumRepo.create.mockReturnValue(mockAlbum);
    mockAlbumRepo.save.mockResolvedValue(mockAlbum);
    mockPhotoRepo.create.mockReturnValue(mockPhoto);
    mockPhotoRepo.save.mockResolvedValue(mockPhoto);

    const result = await PhotoService.createPhoto({
      base64: "base64string",
      userId: 123,
      newAlbumTitle: "Novo álbum",
    });

    expect(result).toEqual(mockPhoto);
  });

  test("updatePhoto success", async () => {
    mockPhotoRepo.findOneBy.mockResolvedValue({ ...mockPhoto });
    mockPhotoRepo.save.mockResolvedValue({ ...mockPhoto, title: "Atualizado" });

    const result = await PhotoService.updatePhoto({
      id: 1,
      title: "Atualizado",
      description: "",
    });

    expect(result.title).toBe("Atualizado");
  });

  test("updatePhoto not found", async () => {
    mockPhotoRepo.findOneBy.mockResolvedValue(null);
    await expect(
      PhotoService.updatePhoto({ id: 1, title: "", description: "" })
    ).rejects.toThrow("Photo not found");
  });
});
