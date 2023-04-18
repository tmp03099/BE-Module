const express = require("express");

const tweetsRouter = express.Router();

//GET
tweetsRouter.get("/", (req, res) => {
  res.json({
    data: [
      {
        title: "Deep Thoughts",
        body: "Friends, I am the realest coder alive",
        author: "Arthur",
      },
    ],
  });
});

//POST
tweetsRouter.post("/", (req, res) => {});

module.exports = tweetsRouter;
