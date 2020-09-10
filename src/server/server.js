import express from "express";
import bodyParser from "body-parser";
import moment from "moment";
import * as chuckNorris from "./utils/chuckNorris.js";
import * as trump from "./utils/trump.js";
import * as memes from "./utils/memes.js";

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

  if (dateOfBirthMoment.year() <= 2000) {
    // Chuck norris
    const joke = await chuckNorris.get();
    responseType = joke.type;
    res.json(joke);
  } else if (
    dateOfBirthMoment.year() > 2000 &&
    !(normalizedName.startsWith("a") || normalizedName.startsWith("z"))
  ) {
    // trump
    console.log(dateOfBirthMoment.year());
    const quote = await trump.get({
      name: normalizedName,
      imageId: dateOfBirthMoment.day(),
    });
    responseType = quote.type;
    res.json(quote);
  } else if (!normalizedName.startsWith("q")) {
    // meme
    const meme = await memes.get({ name: normalizedName });
    responseType = meme.type;

    res.json(meme);
  } else {
    // random
  }

  stats.push({ age, country, responseType });
});

app.get("/stats", (req, res) => {
  let ageSum = 0;
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
    types: Object.entries(types).map(([type, val]) => ({
      name: type,
      count: val,
    })),
    countries: Object.entries(countries).map(([country, val]) => ({
      name: country,
      count: val,
    })),
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
