import { tweetsData } from "./data.js";
const tweetBtn = document.getElementById('tweet-btn')
const tweetInput = document.getElementById('tweet-input')

// Create tweet button functionality
tweetBtn.addEventListener('click', function() {
  console.log(tweetInput.value)
  tweetInput.value = ''
})
 // selecting the contents of the 'data-like' data-attribute
document.addEventListener('click', function(e) {
    if (e.target.dataset.like) {
      handleLikeClick(e.target.dataset.like)
    }
})

function handleLikeClick(tweetId) {
  console.log(tweetId)
}

// Create Tweets boilerplate to display
function getFeedHtml(){
    let feedHtml = ``
    tweetsData.forEach(function(tweet){
    feedHtml += `
      <div class="tweet">
          <div class="tweet-inner">
              <img src="${tweet.profilePic}" class="profile-pic">
              <div>
                  <p class="handle">${tweet.handle}</p>
                  <p class="tweet-text">${tweet.tweetText}</p>
                  <div class="tweet-details">
                    <span class="tweet-detail">
                      <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                      ${tweet.replies.length}
                    </span>
                    <span class="tweet-detail">
                      <i class="fa-solid fa-heart" data-like="${tweet.uuid}"></i>
                      ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                      <i class="fa-solid fa-retweet" data-retweet="${tweet.uuid}"></i>
                      ${tweet.retweets}
                    </span>
                  </div>   
              </div>            
          </div>
      </div>`
  })
  return feedHtml 
}

// Render tweets to HTML
function render() {
  document.getElementById('feed').innerHTML = getFeedHtml()
}

render()