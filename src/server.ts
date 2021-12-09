import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import { router } from "./routes";
import cors from "cors";
import "./database";
import "./shared/container";
import { AppError } from "./errors/AppError";
import { errors } from "celebrate";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    console.log("Not instance of AppError");
    return response.status(500).json({
      status: 500,
      message: `Internal server error -  ${err.message}`,
    });
  }
);

app.listen(3333, () => {
  console.log("Server is running on port 3000  🚀 ");
});
