<?php

	require_once('TwitterAPIExchange.php');
	 
	// Set access tokens: https://dev.twitter.com/apps/
	$settings = array(
	    'oauth_access_token' => "1108421203448881152-hk3p3tvQeBLJw4LcQ4ZiWN1JzZKU1T",
	    'oauth_access_token_secret' => "CFvamAm7nG0y4ComdYcgxQMXRahxJkSvNdvTyNytgVNhA",
	    'consumer_key' => "Vho7pmHrmt0t7Gb4FAvkDkuGh",
	    'consumer_secret' => "ybSWCw9p9JYZoKiCHvfyWa57BszGvjK5eTaKQ6j9dDtUV0ISJm"
	);

	// today = datetime.date.today();

	// $q = $_REQUEST["q"];

	// Choose URL and Request Method
	// $url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
	$url = "https://api.twitter.com/1.1/search/tweets.json";
	// $getfield = '?screen_name=realDonaldTrump&count=20'; // queries start with ? and are strung together with &
	// $getfield = '?q=pride'; // find iso code for english
	// $getfield = '?screen_name=realDonaldTrump&count=20';
	$getfield = '?q=#roundearth OR flatearth&count=10000';
	$requestMethod = "GET";
	
	//Perform the request!
	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
				 ->performRequest();
				 
?>

