import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import statsMiddleware from "./middlewares/finalMiddleware.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use(statsMiddleware);

app.listen(port, () => console.log(`Listening on port ${port}`));
