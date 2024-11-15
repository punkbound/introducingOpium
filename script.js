// use variables to make your code shorter
var a;
var b;
var c;
var d;

// declare your functions
//https://www.w3schools.com/jsref/met_audio_play.asp
function playSong() {
  document.getElementById("pluh").play();
}
function showVid1() {
  document.getElementById("startup").classList.add("disappear");
  document.getElementById("vidplayer").classList.remove("disappear");
  document.getElementById("vidplayer").src =
    "https://www.youtube.com/embed/jzK5h-F1gbA?si=hcoZFIX6zZVFzDe7";
  document.getElementById("pluh").play();
}
function showVid2() {
  document.getElementById("startup").classList.add("disappear");
  document.getElementById("vidplayer").classList.remove("disappear");
  document.getElementById("vidplayer").src =
    "https://www.youtube.com/embed/Pbxq-Wx8_JY?si=BgXbcb-9BkASaj4W";
  document.getElementById("pluh").play();
}

function showVid3() {
  document.getElementById("startup").classList.add("disappear");
  document.getElementById("vidplayer").classList.remove("disappear");
  document.getElementById("vidplayer").src =
    "https://www.youtube.com/embed/WBEYbmtYjac?si=0GfJfWJQfCAI93lH";
  document.getElementById("pluh").play();
}

function showVid4() {
  document.getElementById("startup").classList.add("disappear");
  document.getElementById("vidplayer").classList.remove("disappear");
  document.getElementById("vidplayer").src =
    "https://www.youtube.com/embed/PkWPZxnphKk?si=D0BBcvyPJg46xyZI";
  document.getElementById("pluh").play();
}

function resetAll() {
  document.getElementById("startup").classList.remove("disappear");
  document.getElementById("vidplayer").classList.add("disappear");
  document.getElementById("wha").play();
  document.getElementById("*").classList.remove("vidplayer");
}
