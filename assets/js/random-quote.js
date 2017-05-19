function randomQuote() {
  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?')
    .then(function(response) {

      $("#random_quote").text(response.quoteText);

      if (response.quoteAuthor === "") {
        $("#quote_author").text("-Unknown-");

      } else if (response.quoteAuthor === "Donald Trump") {
        $("#quote_author").text("-An Idiot-");

      } else {
        $("#quote_author").text("-" + response.quoteAuthor + "-");
        
      }
    });
}

$(function() {
  randomQuote();
});

$("#random-quote").click(function() {
  randomQuote();
});
