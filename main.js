var song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function() {
    if (song.paused) {
        song.play();
        icon.src = "img/pause.png";
    } else {
        song.pause();
        icon.src = "img/play.png";
    }
}