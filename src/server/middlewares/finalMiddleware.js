import { add } from "../models/statsBuffer.js";

const finalMiddleware = (req, res, next) => {
  debugger;
  console.log("im here in stats!", JSON.stringify(req.result));
  add(req.statsData);
  res.json(req.result);
};

export default finalMiddleware;
