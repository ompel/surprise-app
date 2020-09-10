import axios from "axios";

export const get = async () => {
  const response = await axios.get("https://api.chucknorris.io/jokes/random");
  return {
    value: response?.data?.value,
    image: response?.data?.icon_url,
    type: "chuck-norris",
  };
};
