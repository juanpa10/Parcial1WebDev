var express = require('express');
var router = express.Router();
var GitHubApi = require("github");

/* GET home page. */
router.get('/getFollowers/:users', function(req,res, next) {

 
var github = new GitHubApi({
    // optional
    debug: true,
});
 
// TODO: optional authentication here depending on desired endpoints. See below in README.
 
github.users.getFollowingForUser({
   // username: req.params.user
}, function(err, data) {

    console.log("holaaaa: "+data);
    res.json(data);
});
});


module.exports = router;

