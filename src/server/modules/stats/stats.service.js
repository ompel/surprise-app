import { get } from "../../models/statsBuffer.js";

export const calcStats = () => {
  const stats = get();
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
  return {
    averageAge,
    types: Object.entries(types).map(([type, val]) => ({
      name: type,
      count: val,
    })),
    countries: Object.entries(countries).map(([country, val]) => ({
      name: country,
      count: val,
    })),
  };
};
