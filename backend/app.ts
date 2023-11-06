import express from "express";
import * as dotenv from "dotenv";
import apiRoute from "./src/routes/api.routes"
dotenv.config();

const app = express();

const port = process.env.PORT;

app.use("/api",apiRoute)

app.listen(port, () => {
  console.log(`Server is up and running ${port}`);
});
