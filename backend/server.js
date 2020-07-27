import express from "express";

import { data } from "./data";
import { log } from "console";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("Server started at port number 5000");
});
