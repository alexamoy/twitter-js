const nunjucks = require('nunjucks');
const express = require( 'express' );
const chalk = require('chalk');
const app = express();
const routes = require('./routes');

//use is asynchronous

app.use('/', routes);

const PORT = 3000; 
app.listen(PORT, () => {
    console.log("server listening");
});


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

//nunjucks.render('index.html', content, function (err, output) {console.log(output)});

