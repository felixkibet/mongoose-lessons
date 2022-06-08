require("dotenv").config();
const mongoose = require('mongoose');
const express = require("express");
const route = require('./routes/router');
const bodyParser = require('body-parser');
const app = express();
 
app.use(bodyParser.json())
// ROUTES
app.use('/posts', route);

mongoose.connect(process.env.URI, {useUnifiedTopology: true,useNewUrlParser: true}, (err)=> {
  if(err) console.log(err);
  console.log("Connected to database");
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000...`);
});
