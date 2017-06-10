var quotes = [
  ["Capture three to make an eye.","Life and Death"],
  ["Eyes win semeai.", "Life and Death"],
  ["Play urgent moves before big moves.","Opening Principle"],
  ["Even a moron connects against a peep.","Tactics"],
  ["Don't follow proverbs blindly.","Meta proverb"],
];
var currentQuote = 0;


var makeNewQuote = function() {
  var randomIndex = Math.floor(Math.random()*quotes.length)
  if (randomIndex == currentQuote) {
    randomIndex = (randomIndex+1)%quotes.length;
  }
  currentQuote = randomIndex;
  var newQuote = quotes[randomIndex][0];
  var newAuthor = quotes[randomIndex][1];
  document.getElementById("quote").innerHTML = newQuote;
  document.getElementById("author").innerHTML = newAuthor;
};

var tweet = function() {
};
