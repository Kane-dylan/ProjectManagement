import dotenv from "dotenv"
import express from "express"

dotenv.config({
  path: "./.env",
})

const app = express();
const port =process.env.PORT || 3000;

app.get("/", (req,res) => {
  res.send("Hello");
})

app.get("/social", (req, res) =>{ 
  res.send("We have no socials at this moment")
})

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
})