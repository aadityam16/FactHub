require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const factRouter = require("./routes/fact");
// db connection
try {
  mongoose.connect(
    "mongodb+srv://aadityam2003:rpKEVOSC5OIJmNCC@cluster0.1v6kevb.mongodb.net/Facts?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
} catch (e) {
  console.log("could not connect");
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use("/fact", factRouter.router);

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
