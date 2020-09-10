import axios from "axios";

export const get = async ({ name, imageId }) => {
  const quote = axios.get(
    `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`
  );
  const image = axios.get(`http://www.splashbase.co/api/v1/images/${imageId}`);
  const [quoteResponse, imageRespone] = await Promise.all([quote, image]);

  return {
    value: quoteResponse?.data?.message,
    image: imageRespone?.data?.url,
    type: "trump-quote",
  };
};

