// app.js
var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

var stream = T.stream('statuses/filter', {track: "bitcoin"});
stream.on('data', function(tweet) {
	if (Math.floor((Math.random() * 10) + 1) == 9) {
		T.post('favorites/create', tweet.id_str, function(err, response){
        // If the favorite fails, log the error message
        if(err){
          console.log("posting too much" + tweet.id_str);
        }
        // If the favorite is successful, log the url of the tweet
        else{
          username = response.user.screen_name;
          tweetId = response.id_str;
          console.log('Favorited: ', 'https://twitter.com/' + username + '/status/' + tweetId);
        }
      });
	}
});
 
stream.on('error', function(error) {
  throw error;
});