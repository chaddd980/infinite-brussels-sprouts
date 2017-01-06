var a = 1
var ready = true
$(window).scroll(function() {
  if (ready && $(window).scrollTop() == $(document).height() - $(window).height()){
    ready = false;
    var request = $.ajax({
      method: "GET",
      url: "/tweets.json?page=" + (a)
    });

    request.done(function(data){
      a += 1
      data.forEach(function(tweet) {
        $("ul.tweets").append("<li class='tweet'><div class='body'>" + tweet.text +
         "</div><div class='user'>" + tweet.username + "</div></li>");
         ready = true;
      });
    });
  };
})
