import * as statsService from "./stats.service.js";

export async function getStats(req, res, next) {
  res.json(statsService.calcStats());
}
