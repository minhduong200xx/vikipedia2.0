import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
// import logger from "./utils/logger";
import swaggerDocs from "./utils/swagger";
import router from "./router";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
  swaggerDocs(app, 8080);
});

const MONGO_URL =
  "mongodb+srv://admin:admin@cluster0.7uxeg5z.mongodb.net/?retryWrites=true&w=majority"; // DB URI

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
// MongoDB connection events
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
