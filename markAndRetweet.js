// app.js
var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

var stream = T.stream('statuses/filter', {follow: "10228272"});
stream.on('data', function(event) {
  console.log(event && event.text);
});
 
stream.on('error', function(error) {
  throw error;
});