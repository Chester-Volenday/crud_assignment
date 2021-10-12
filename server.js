const routes = require('./routes');
const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(routes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server listening on port " + port));