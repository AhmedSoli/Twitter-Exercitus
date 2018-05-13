// app.js
var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

// Set up your search parameters
var params = {
  q: 'monero',
  count: 100,
  result_type: 'recent',
  lang: 'en'
};

T.get('search/tweets', params, function(err, data, response) {
  if(!err){
    // Loop through the returned tweets
    var id,username,tweetID,list_id,user_id;
    for(var i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      params = { 
        slug: "monero",
        user_id: data.statuses[i].user.id_str,
        screen_name: data.statuses[i].user.screen_name,
        owner_screen_name: "AltumAlien",
      };
      // Try to Favorite the selected Tweet
      T.post('lists/members/create', params, function(err, response){
        // If the favorite fails, log the error message
        if(err){
          console.log(err);
        }
        // If the favorite is successful, log the url of the tweet
        else{
          console.log('Added ');
        }
      });
    }
  } else {
    console.log(err);
  }
});