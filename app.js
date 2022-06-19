import express from "express";
import config from "./config/index.js";
import cors from 'cors';

import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.listen(config.port, () => console.log(`Listening on port ${config.port}!`));