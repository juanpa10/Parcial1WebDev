var express = require('express');
var router = express.Router();
var GitHubApi = require("github");

/* GET home page. */
router.get('/getFollowers/:username', function(req,res) {

 
var github = new GitHubApi({
    // optional
    debug: true,
});
  
github.users.getFollowingForUser({
  username: req.params.username
}, function(err, data) { 
    res.json(data.data);
});
});


module.exports = router;

