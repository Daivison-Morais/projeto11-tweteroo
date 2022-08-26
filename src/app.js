import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const listUsers = [];

server.post("/sign-up", (req, res) => {
  const login = req.body;
  listUsers.push(login);
  res.send("ok");
});

server.listen(5000, () => {
  console.log("listen on 5000");
});
