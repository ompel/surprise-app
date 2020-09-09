const axios = require("axios");

exports.joke = () => {
  return axios.get("https://api.chucknorris.io/jokes/random");
};
