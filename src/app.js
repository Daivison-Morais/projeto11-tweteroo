import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const listUsers = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
  {
    username: "lula molusco",
    avatar:
      "data:image/jpeg;base64,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",
  },
];
const listTweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
  {
    username: "lula molusco",
    tweet: "eu amo o hub",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];

server.get("/tweets", (req, res) => {
  let i = listTweets.length - 1;

  if ([listTweets.length - 1] < 10) {
    res.send(listTweets);
  } else {
    const listAux = [];
    for (i; i >= [listTweets.length - 1] - 9; i--) {
      listAux.push(listTweets[i]);
    }
    res.send(listAux);
  }
});

server.post("/sign-up", (req, res) => {
  const login = req.body;
  const sameUser = listUsers.find((value) => value.username === login.username);

  listUsers.push(login);
  res.send("ok");
});

server.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  const sameUser = listUsers.find((value) => value.username === username);

  listTweets.push({ username, tweet, avatar: sameUser.avatar });
  res.status(201).send("Ok");
});

server.listen(5003, () => {
  console.log("listen on 5003");
});
