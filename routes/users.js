var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.post('/fetchFolloweeReviewsForUser', function(req, res, next) {
	var data = [
		{restaurant_name: "Subway", first_name: "Jay", last_name: "Yoon"},
		{restaurant_name: "The Cheesecake Factory", first_name: "Clara", last_name: "Yoon"}
	];
  res.send({data: JSON.parse(JSON.stringify(data))});
});

module.exports = router;
