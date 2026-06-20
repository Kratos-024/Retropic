export type GameMedia = {
  cover: string;
  screenshots: string[];
  videos: {
    videoId: string;
    platform: string;
    url: string;
    embedUrl: string;
    thumbnail: string;
  }[];
};

export type GameData = {
  id: number;
  name: string;
  summary: string;
  storyline: string;
  genres: string[];
  media: GameMedia;
};
export const formatGameData = (raw: any): GameData => {
  const toHttps = (url?: string) => (url ? `https:${url}` : "");

  return {
    id: raw.id,
    name: raw.name || "",
    summary: raw.summary || "",
    storyline: raw.storyline || "",

    genres: raw.genres?.map((g: any) => g.name) || [],

    media: {
      cover: toHttps(raw.cover?.url),

      screenshots:
        raw.screenshots?.map((s: any) =>
          toHttps(s.url?.replace("t_thumb", "t_screenshot_big")),
        ) || [],

      videos:
        raw.videos?.map((v: any) => ({
          videoId: v.id,
          platform: "youtube",
          url: `https://www.youtube.com/watch?v=${v.video_id}`,
          embedUrl: `https://www.youtube.com/embed/${v.video_id}`,
          thumbnail: `https://img.youtube.com/vi/${v.video_id}/hqdefault.jpg`,
        })) || [],
    },
  };
};
const GetGameInfo = async (title: string) => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/v1/game/getGameInfo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error in GetGameInfo:", error);
  }
};
export { GetGameInfo };
