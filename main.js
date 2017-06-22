var quotes = [
  ["Capture three to make an eye.","Life and Death"],
  ["Eyes win semeai.", "Life and Death"],
  ["Play urgent moves before big moves.","Opening Principle"],
  ["Even a moron connects against a peep.","Tactics"],
  ["Don't follow proverbs blindly.","Meta proverb"],
];
var currentQuoteIndex = 0;

var makeNewQuote = function() {
  var randomIndex = Math.floor(Math.random()*quotes.length)
  if (randomIndex == currentQuoteIndex) {
    randomIndex = (randomIndex+1)%quotes.length;
  }
  currentQuoteIndex = randomIndex;
  var newQuote = quotes[currentQuoteIndex][0];
  var newAuthor = quotes[currentQuoteIndex][1];
  document.getElementById("quote").innerHTML = newQuote;
  document.getElementById("author").innerHTML = newAuthor;
};

// https://dev.twitter.com/web/tweet-button/javascript-create
var renderTweetButton = function() {
  document.getElementById("tweetContainer").innerHTML = null;
  twttr.widgets.createShareButton(
    '/',
    document.getElementById("tweetContainer"),
    {
      text: document.getElementById("quote").innerHTML + ' ~ ' +
            document.getElementById("author").innerHTML
    }
  );
}

var renderNewQuote = function(){
  makeNewQuote();
  renderTweetButton();
}

// Run on page startup
makeNewQuote();
