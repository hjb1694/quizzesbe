import express from "express";
import config from "./config/index.js";

const app = express();
app.use(express.json());


app.listen(config.port, () => console.log(`Listening on port ${config.port}!`));