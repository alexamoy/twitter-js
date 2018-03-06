const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.use(express.static('public'))

router.use(function (req, res, next) {
    console.log(req.method, req.path, res.statusCode);
    next();
})

router.get('/', (req, res) => {
    let tweets = tweetBank.list();
    res.render('index', {tweets: tweets});
    res.sendFile(path.join(__dirname + 'public/stylesheets/style.css'));

}),




module.exports = router;
