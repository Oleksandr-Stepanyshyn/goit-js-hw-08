import vimeo from "@vimeo/player";
var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function (currentTime) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime.seconds));
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).then(function (seconds) {}).catch(function(error) {
     switch (error.name) {
         case 'RangeError':
             break;

         default:
             break;
     }
 });




