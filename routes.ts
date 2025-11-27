import { Router } from "express";
import fs from "fs";
import path from "path";
import { IMovie } from "./types";

const router = Router();
const dataPath = path.join(__dirname, "movies.json");

function readData() {
  const json = fs.readFileSync(dataPath, "utf-8");
  console.log(json);
  return JSON.parse(json);
}

function writeData(data: any) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf-8");
}

// GET all products
router.get("/movies", (req, res) => {
  const data = readData();
  res.json(data.movies);
});

// POST add new product
router.post("/movies", (req, res) => {
  const data = readData();

  const newMovie: IMovie = {
    id: Date.now().toString(),
    ...req.body
  };

  data.movies.push(newMovie);
  writeData(data);

  res.status(201).json(newMovie);
});

export default router;
