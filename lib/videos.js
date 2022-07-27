import axios from "axios";

const getResponseFields = (resData) => {
  return resData.map((data) => {
    const dataInfo = data?.snippet;

    const id = data?.id?.videoId;
    const title = dataInfo?.title;
    const description = dataInfo?.description;
    const publishedAt = dataInfo?.publishedAt;
    const thumbnail = dataInfo?.thumbnails?.high;

    return { id, title, description, publishedAt, thumbnail };
  });
};

export const getRequestVideosUrl = (query, limit) => {
  return `${process.env.YOUTUBE_API_URL}?part=snippet&maxResults=${limit}&q=${query}&key=${process.env.YOUTUBE_API_KEY}`;
};

export const getVideosData = async (query, limit) => {
  const reqUrl = getRequestVideosUrl(query, limit);
  const resData = await axios.get(reqUrl);

  return getResponseFields(resData.data.items);
};
