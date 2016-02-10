'use strict';
let PORT = process.env.PORT || 3000;

let express    = require('express'),
    bodyParser = require('body-parser'),
    morgan     =  require('morgan'),
    app         = express();

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

// ROUTES
app.use('/legislators', require('./routes/legislators'));


app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
})


module.exports = app;
