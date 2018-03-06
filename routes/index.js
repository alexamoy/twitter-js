const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
var path = require('path');

router.use(express.static('public'))

router.use(function (req, res, next) {
    console.log(req.method, req.path, res.statusCode);
    next();
})

router.get('/', (req, res) => {
    let tweets = tweetBank.list();
    res.render('index', {tweets: tweets});
    res.sendFile(path.join(__dirname + 'public/stylesheets/style.css'));
    let names = tweetBank.list();
})

router.get('/users/:name', function(req, res, next) {
    var userTweets = tweetBank.find( {name: req.params.name} );
    res.render( 'index', { tweets: userTweets } );
    console.log(tweets);
  });
  
module.exports = router;
