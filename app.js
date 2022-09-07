const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productRoute = require("./routes/product.js");

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use("/api", productRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("Bem-vindo to my API");
  });

// mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));
// server connection
  app.listen(port, () => console.log("Server listening to", port));