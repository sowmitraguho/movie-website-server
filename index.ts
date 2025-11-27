import express from "express";
import cors from "cors";
import router from "./routes";
//import router from "./routes";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

export default app;