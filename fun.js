<script>
	//gives a new quote each time you refresh
$.ajaxSetup({
    cache:false
});

//inserts the quote upon page load and inserts the quote into a tweet
	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
	  $(".quote").html(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
	  $(".share-button").attr("href", twitterBaseURL + $(a[0].content).text() + " - " + a[0].title);
	});

//gives a new random quote upon click and inserts the new quote into the tweet
$(".quote-button").click(function() {

	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
	  $(".quote").html(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
	  $(".share-button").attr("href", twitterBaseURL + $(a[0].content).text() + " - " + a[0].title);	
	});
	
});

var twitterBaseURL = "https://twitter.com/intent/tweet?text=";

</script>
