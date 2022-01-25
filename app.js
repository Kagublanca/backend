import express from "express";
import loggers from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(loggers("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("./")

export default app;