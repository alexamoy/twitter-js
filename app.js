const nunjucks = require('nunjucks');
const express = require( 'express' );
const chalk = require('chalk');
const app = express();

//use is asynchronous
app.use(function (req, res, next) {
    console.log(req.method, req.path, res.statusCode);
    next();
})

app.get('/', (req, res) => {
    res.send('This is a janky Twitter');
});

app.get('/special', (req, res) => {
    res.send("You've reached the special area");
})

const PORT = 3000; 
app.listen(PORT, () => {
    console.log("server listening");
});


app.get('/render', (req, res) => {
    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

const content = {
    title: 'An Example', 
    people: [
        { name: 'Alexa'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
}



app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

nunjucks.render('index.html', content, function (err, output) {console.log(output)});

