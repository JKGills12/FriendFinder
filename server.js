//Dependencies
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();


//Listener
app.listen(process.env.PORT || 8080, () => console.log('App listening on PORT: 8080'));
