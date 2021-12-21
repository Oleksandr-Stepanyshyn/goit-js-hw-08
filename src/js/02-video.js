import vimeo from "@vimeo/player";
var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function (currentTime) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds));
    console.log(localStorage.getItem("videoplayer-current-time"));
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {}).catch(function(error) {
     switch (error.name) {
         case 'RangeError':
             break;

         default:
             break;
     }
 });




