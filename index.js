const express = require("express");
const mongoose = require("mongoose");
const productRoute = require('./routes/product.route.js');
const app = express();

// middleware 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes 
app.use("/api/products",productRoute);


app.get("/", function (req, res) {
  res.send("Hello from node API");
});


mongoose
  .connect(
    "mongodb+srv://admin:admin@mongodb.yus2q.mongodb.net/Node-API?retryWrites=true&w=majority&appName=mongoDB"
  )
  .then(() => {
    console.log("connected to Database");
    app.listen(3000, (req, res) => {
      console.log("server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("connection failed: ", err);
  });
