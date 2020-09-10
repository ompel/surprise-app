import axios from "axios";

export const get = async ({ name = "" }) => {
  const nameNumOfChars = name.replace(/s/g, "").length;
  const memes = await axios.get(`https://api.imgflip.com/get_memes`);
  const memesList = memes?.data?.data?.memes;

  return {
    value: memesList?.[nameNumOfChars]?.name,
    image: memesList?.[nameNumOfChars]?.url,
    type: "meme",
  };
};


