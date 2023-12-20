// Simple app that u have 140 characters limit
// And it tells u that how many characters u have written and how many left
let tweet = prompt("Compose your tweet: \n(140 characters limited)");
alert(tweet.slice(0, 140));
let tweetCount = tweet.length;
alert(tweetCount + " characters entered | " + (140 - tweetCount) + " characters remaining.");