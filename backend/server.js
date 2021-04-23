const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Search = require("./models/Search");

mongoose.connect("mongodb://127.0.0.1:27017/Searchs", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Search.find((err, Searchs) => {
    if (err) {
      console.log(err);
    } else {
      res.json(Searchs);
    }
  });
});

app.post("/create", (req, res) => {
  const Search = new Search(req.body);
  Search
    .save()
    .then((Search) => {
      res.json(Search);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Search.findById(id, (err, Search) => {
    res.json(Search);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  Search.findById(id, (err, Search) => {
    if (!Search) {
      res.status(404).send("Search not found");
    } else {
      Search.text = req.body.text;

      Search
        .save()
        .then((Search) => {
          res.json(Search);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
