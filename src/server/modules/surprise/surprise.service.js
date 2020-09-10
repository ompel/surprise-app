import axios from "axios";

export async function chuckNorris() {
  const response = await axios.get("https://api.chucknorris.io/jokes/random");

  return {
    value: response?.data?.value,
    image: response?.data?.icon_url,
    type: "chuck-norris",
  };
}

export async function trump({ name, dayOfBirth }) {
  const quote = axios.get(
    `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`
  );
  const image = axios.get(
    `http://www.splashbase.co/api/v1/images/${dayOfBirth}`
  );
  const [quoteResponse, imageRespone] = await Promise.all([quote, image]);

  return {
    value: quoteResponse?.data?.message,
    image: imageRespone?.data?.url,
    type: "trump-quote",
  };
}

export async function meme({ name }) {
  const nameNumOfChars = name.replace(/s/g, "").length;
  const memes = await axios.get(`https://api.imgflip.com/get_memes`);
  const memesList = memes?.data?.data?.memes;

  return {
    value: memesList?.[nameNumOfChars]?.name,
    image: memesList?.[nameNumOfChars]?.url,
    type: "meme",
  };
}
