import 'dotenv/config'
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/cart", (req, res) => {
  res.send("Cart Page");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
