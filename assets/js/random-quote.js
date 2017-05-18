function randomQuote() {
  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?')
    .then(function(response) {
      console.log(response);

      $("#random_quote").text();
    });
}

$(function() {
  randomQuote();
});

$("#random-quote").click(function() {
  randomQuote();
});
