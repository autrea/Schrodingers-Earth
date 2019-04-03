var before = -91;
var after = (before * -1) * 2;

TweenMax.set('#Ground_1', { x: before });
TweenMax.set('#Ground_2', { x: before });

TweenMax.to('#Ground_1', 40, { x: after, ease: Power0.easeNone, repeat: -1 });
TweenMax.to('#Ground_2', 40, { x: after, ease: Power0.easeNone, repeat: -1 });

// var star = [];

// for(var i = 0; i < 34; i++) {
//     star.push(document.getElementById('star_' + i));
//     console.log(star[i]);

//     star[i].
// }

