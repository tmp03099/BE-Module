const express = require("express");
const TweetsRouter = require("./routes/TweetsRouter");

const app = express();
const PORT = 4000;

// Config
app.use(express.urlencoded({ extended: false }));

app.use("/api/tweets", TweetsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
