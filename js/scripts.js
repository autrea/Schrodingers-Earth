window.onload = init;

function init() {

    getTweets();

    function getTweets() {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'get_tweets.php', true);
        xhr.send(null);

        xhr.onload = function () {


            if (xhr.status == 200) {


                console.log(xhr);


                var tweets = JSON.parse(xhr.responseText);
                tweets = tweets.statuses;

                var d = new Date();
                var day = d.getDay();
                var month = d.getMonth();
                
                var currentDay = "";
                var currentMonth = "";
                var currentDate = d.getDate();
                var currentYear = d.getFullYear();

                // convert int to string
                switch (day) {
                    case 0: currentDay = "Sun"; break;
                    case 1: currentDay = "Mon"; break;
                    case 2: currentDay = "Tue"; break;
                    case 3: currentDay = "Wed"; break;
                    case 4: currentDay = "Thu"; break;
                    case 5: currentDay = "Fri"; break;
                    case 6: currentDay = "Sat"; break;
                }

                // convert int to string
                switch (month) {
                    case 0: currentMonth = "Jan"; break;
                    case 1: currentMonth = "Feb"; break;
                    case 2: currentMonth = "Mar"; break;
                    case 3: currentMonth = "Apr"; break;
                    case 4: currentMonth = "May"; break;
                    case 5: currentMonth = "Jun"; break;
                    case 6: currentMonth = "Jul"; break;
                    case 7: currentMonth = "Aug"; break;
                    case 8: currentMonth = "Sep"; break;
                    case 9: currentMonth = "Oct"; break;
                    case 10: currentMonth = "Nov"; break;
                    case 11: currentMonth = "Dec"; break;
                }

                console.log(tweets);


                // count amount of tweets
                var roundCounter = 0;
                var flatCounter = 0;

                for(var i = 0; i < tweets.length; i++) {
                    // target when the tweet was created
                    var tweet = tweets[i].created_at;

                    console.log(tweet);

                    // parse the date into variables
                    var tweetDay = tweet.slice(0, 3);
                    var tweetMonth = tweet.slice(4, 7);
                    var tweetDate = parseInt(tweet.slice(8, 10));
                    var tweetYear = parseInt(tweet.slice(25, 32));

                    var numOfHashtags = tweets[i].entities.hashtags.length;

                    console.log(tweetDay + " " + tweetMonth + " " + tweetDate + " " + tweetYear);
                    console.log(currentDay + " " + currentMonth + " " + currentDate + " " + currentYear);

                    // because of varrying time zones, "Today" happens tomorrow in some instances, and so the if statement might have to be set directly
                    // if(tweetDay == "Thu" && tweetMonth == currentMonth && tweetDate == 4 && tweetYear == currentYear) {
                    if(tweetDay == currentDay && tweetMonth == currentMonth && tweetDate == currentDate && tweetYear == currentYear) {
                        
                        for(var j = 0; j < numOfHashtags; j++) {
                            // var numOfHashtags = tweets[i].entities.hashtags[j].length;
                            var hashtag = tweets[i].entities.hashtags[j].text;
                            console.log(numOfHashtags);

                            // determine if tweets are flat earth or round earth related
                            if(hashtag == "roundearth" || hashtag == "RoundEarth") {
                                console.log("This #roundearth tweet happened today");
                                roundCounter++;
                                console.log(roundCounter);
                            }

                            if (hashtag == "flatearth" || hashtag == "FlatEarth") {
                                console.log("This #flatearth tweet happened today");
                                flatCounter++;
                                console.log(flatCounter);
                            } 
                        } 
                        
                    } else {
                        console.log("No more tweets made today");
                        break;
                    }
                }

                // input number of tweets into html
                document.getElementById("flatTweets").innerHTML = "Number of #FlatEarth tweets today: " + flatCounter;
                document.getElementById("roundTweets").innerHTML = "Number of #RoundEarth tweets today: " + roundCounter;

                var results = document.getElementById("results");

                // determine shape of the earth based on greater amount of tweets
                if (flatCounter > roundCounter) {
                    $("#Earth__Flat").show();
                    results.innerHTML = "Twitter has deemed that the Earth is flat."

                } else if (flatCounter < roundCounter) {
                    $("#Earth__Round").show();
                    results.innerHTML = "Twitter has deemed that the Earth is round."

                } else if (flatCounter == roundCounter) {
                    $("#cat").show();
                    results.innerHTML = "Twitter is unable to determine the shape of the Earth."
                }

            } else {
                console.log(xhr);
            }

        }

    }

}