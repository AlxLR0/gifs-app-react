import { beforeEach, describe, expect, test, vi } from "vitest";
import { giphyApi } from "../api/giphy.api";
import { getGifsByQuery } from "./get-gifs-by-query.actions";

vi.mock("../api/giphy.api", () => ({
  giphyApi: vi.fn(),
}));

describe("getGifsByQuery", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("debe llamar a la API con la query y devolver la lista mapeada", async () => {
    vi.mocked(giphyApi).mockResolvedValue({
      data: {
        data: [
          {
            id: "1",
            title: "Batman",
            images: {
              original: {
                url: "https://example.com/batman.gif",
                width: "200",
                height: "100",
              },
            },
          },
        ],
      },
    } as any);

    const gifs = await getGifsByQuery("batman");

    expect(giphyApi).toHaveBeenCalledWith("/search", {
      params: {
        q: "batman",
        limit: 10,
      },
    });

    expect(gifs).toEqual([
      {
        id: "1",
        title: "Batman",
        url: "https://example.com/batman.gif",
        width: 200,
        height: 100,
      },
    ]);
  });

  test("debe devolver un arreglo vacío si la API no trae resultados", async () => {
    vi.mocked(giphyApi).mockResolvedValue({
      data: { data: [] },
    } as any);

    const gifs = await getGifsByQuery("noexiste");

    expect(giphyApi).toHaveBeenCalledWith("/search", {
      params: {
        q: "noexiste",
        limit: 10,
      },
    });

    expect(gifs).toEqual([]);
  });
});