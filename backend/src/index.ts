import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database";
//
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.get("/health", (_, res) => {
      res.json({ db: "connected" });
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err: any) => {
    console.error("Database connection error:", err);
  });
