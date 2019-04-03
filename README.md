# Schrodinger's Earth using the Twitter API

## Disclaimer
Because of varying timezones, an error sometimes appears as tweets will be made "in the future" and won't be registered as having happened "today". In this instance, the website becomes confused and and can't open the box to see what tweets will determine the shape of the Earth.

The error can be fixed by manually inputting the "currentDay" and "currentDate" variables into thek if statement that determines whether a tweet happened "today". There is a line of code demonstrating this commented out next to this.

## About the Website

Schrodinger's Earth looks at #roundearth and #flatearth tweets, and determines if any of them were made today. If either of these hashtags were used today, it adds them to respective counters, only pulling tweets made on the day the website is accessed.

If there are more #flatearth tweets, an animated image of a flat earth is displayed.
If there are more #roundearth tweets, an animated image of a globe is displayed.
If there is an even number of tweets, or no tweets, an animated image of a question mark cat will be displayed.

The website is satiracle, commenting on the debate regarding the shape of the Earth, and how there are many tweeters that will post and believe information on the internet without looking into further depth. Schrodinger's Earth gives them a "world" where their tweeting actually makes a difference and matters.

But mostly we just want cats in space.
