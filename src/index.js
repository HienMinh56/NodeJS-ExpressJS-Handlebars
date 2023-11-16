const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars'); //use handlebar layout
const app = express();
const port = 3000;

const route = require('./routes');

//set the folder to read the css + img
app.use(express.static(path.join(__dirname, 'public')));

//body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// XMLHttpRequest, fetch, 


//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' })); //định nghĩa
app.set('view engine', 'hbs'); //gọi để dùng
app.set('views', path.join(__dirname, 'resources/views'));

console.log('PATH: ', path.join(__dirname, 'resources/views'))

// Routes init
route(app);

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Alpha test app listening at http://localhost:${port}`)
})