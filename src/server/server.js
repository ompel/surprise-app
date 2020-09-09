const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const chuckNorris = require("./utils/chuckNorris");

const stats = [];

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Surprise endpoint

app.post("/surprise", async (req, res) => {
  // console.log(req.body);
  const { dateOfBirth, name, country } = req.body;
  const dateOfBirthMoment = moment(dateOfBirth);
  const normalizedName = name.toLowerCase();
  const age = moment().diff(dateOfBirthMoment, "years");
  let responseType;
  console.log({ age, year: dateOfBirthMoment.year() });

  if (true || dateOfBirthMoment.year() < 2000) {
    // Chuck norris
    const joke = await chuckNorris.joke();
    responseType = "chuck-norris";
    res.json({
      value: joke.data.value,
      image: joke.data.icon_url,
      type: responseType,
    });
  } else if (
    dateOfBirthMoment.year() > 2000 &&
    (!normalizedName.startsWith("a") || !normalizedName.startsWith("z"))
  ) {
    // trump
  } else if (!normalizedName.startsWith("q")) {
    // meme
  } else {
    // random
  }

  stats.push({ age, country, responseType });
});

app.get("/stats", (req, res) => {
  let ageSum = 0;
  // Math.floor(stats.reduce((acc, curr) => (acc += curr.age)) / stats.length);
  const types = {};
  const countries = {};
  stats.forEach((stat) => {
    ageSum += stat.age;
    if (!types[stat.responseType]) {
      types[stat.responseType] = 1;
    } else {
      types[stat.responseType]++;
    }
    if (!countries[stat.country]) {
      countries[stat.country] = 1;
    } else {
      countries[stat.country]++;
    }
  });
  const averageAge = Math.floor(ageSum / stats.length);
  res.json({
    averageAge,
    types,
    countries,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
