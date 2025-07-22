import { AlbumService } from "../../service/album.service";
import { mockAlbum } from "../../mocks/repository";

const mockAlbumRepo = {
  find: jest.fn(),
  findOneBy: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
};

jest.mock("../../config/database", () => ({
  AppDataSource: {
    getRepository: jest.fn(() => mockAlbumRepo),
  },
}));

describe("AlbumService", () => {
  beforeEach(() => jest.clearAllMocks());

  test("getAllAlbums", async () => {
    mockAlbumRepo.find.mockResolvedValue([mockAlbum]);
    const result = await AlbumService.getAllAlbums();
    expect(result).toEqual([mockAlbum]);
  });

  test("update album with title and description", async () => {
    mockAlbumRepo.findOneBy.mockResolvedValue({ ...mockAlbum });
    mockAlbumRepo.save.mockResolvedValue({
      ...mockAlbum,
      title: "New title",
      description: "New description",
    });

    const result = await AlbumService.update({
      id: 1,
      title: "New title",
      description: "New description",
    });

    expect(result.title).toBe("New title");
    expect(result.description).toBe("New description");
  });

  test("update album not found", async () => {
    mockAlbumRepo.findOneBy.mockResolvedValue(null);
    await expect(
      AlbumService.update({ id: 1, title: "X", description: "Y" })
    ).rejects.toThrow("Album not found");
  });

  test("delete album success", async () => {
    mockAlbumRepo.findOneBy.mockResolvedValue(mockAlbum);
    mockAlbumRepo.delete.mockResolvedValue({ affected: 1 });

    const result = await AlbumService.delete(1);
    expect(result.affected).toBe(1);
  });

  test("delete album not found", async () => {
    mockAlbumRepo.findOneBy.mockResolvedValue(null);
    await expect(AlbumService.delete(1)).rejects.toThrow("album not found");
  });
});
