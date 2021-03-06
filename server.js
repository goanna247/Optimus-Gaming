const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');

const users = require("./routes/api/users");
const sessions = require("./routes/api/sessions");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//
app.use(bodyParser.json());

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', //~BREAKPOINT this may break when i upload it to heroku. 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use('/api/sessions', sessions);

// Serve static assets if we are in production 

if (process.env.NODE_ENV === 'production') {
  //Set static folder 
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//crying why isnt this working

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
