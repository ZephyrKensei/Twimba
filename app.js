import { tweetsData } from "./data.js";
const tweetBtn = document.getElementById('tweet-btn')
const tweet = document.getElementById('tweet')

tweetBtn.addEventListener('click', function() {
  console.log(tweet.value)
  tweet.value = ''
})

console.log(tweetsData)