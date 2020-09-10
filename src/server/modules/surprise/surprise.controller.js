import moment from "moment";
import { randomInteger } from "../../utils/index.js";
import * as surpriseService from "./surprise.service.js";

const responseTypes = {
  NORRIS: "chuck-norris",
  TRUMP: "trump",
  MEME: "meme",
};

const responseByType = (type) => {
  switch (type) {
    case responseTypes.NORRIS:
      return surpriseService.chuckNorris;
    case responseTypes.TRUMP:
      return surpriseService.trump;
    case responseTypes.MEME:
      return surpriseService.meme;

    default:
      break;
  }
};

export async function generateResponse(req, res, next) {
  const { dateOfBirth, name, country } = req.body;
  const dateOfBirthMoment = moment(dateOfBirth);
  const normalizedName = name.toLowerCase();
  const age = moment().diff(dateOfBirthMoment, "years");
  const possibleResponse = [];

  // Decide which response to send
  if (dateOfBirthMoment.year() <= 2000) {
    // chuck norris
    possibleResponse.push(responseTypes.NORRIS);
  } else if (
    !(normalizedName.startsWith("a") || normalizedName.startsWith("z"))
  ) {
    // trump
    possibleResponse.push(responseTypes.TRUMP);
  }

  if (!normalizedName.startsWith("q")) {
    // meme
    possibleResponse.push(responseTypes.MEME);
  }

  let getResponse;
  let responseType;
  if (possibleResponse.length === 1) {
    getResponse = responseByType(possibleResponse[0]);
    responseType = possibleResponse[0];
  } else {
    // get a random one
    const types = Object.values(responseTypes);
    const random = randomInteger(types.length);
    getResponse = responseByType(types[random]);
    responseType = types[random];
  }

  req.statsData = {
    country,
    age,
    responseType,
  };
  req.result = await getResponse({ name, dayOfBirth: dateOfBirthMoment.day() });

  next();
}
