// app.js
var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

var stream = T.stream('statuses/filter', {track: "bitcoin"});
stream.on('data', function(tweet) {
	console.log(tweet.user.location);
});
 
stream.on('error', function(error) {
  throw error;
});