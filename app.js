const express = require( 'express' );
const chalk = require('chalk');
const app = express();

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