// app.js
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var stream = T.stream('statuses/filter', {
    track: "ethereum"
});
stream.on('data', function(tweet) {
    params = {
        slug: "ethereum",
        user_id: tweet.user.id_str,
        screen_name: tweet.user.screen_name,
        owner_screen_name: "AltumAlien",
    };
    T.post('lists/members/create', params, function(err, response) {
        // If the favorite fails, log the error message
        if (err) {
            console.log("posting too much" + tweet.id_str);
        }
        // If the favorite is successful, log the url of the tweet
        else {
            console.log("Added:" + tweet);
        }
    });
});
stream.on('error', function(error) {
    throw error;
});