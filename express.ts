import express, { Request, Response } from "express";
import * as fs from 'fs'
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send();
});

app.listen(8080)