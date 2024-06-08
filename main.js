let progress = document.querySelector(".progress");
let song = document.getElementById("song");
let ctrlicone = document.getElementById("ctrlicone");


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlicone.classList.contains("fa-pause")) {
        song.pause();
        ctrlicone.classList.remove("fa-pause");
        ctrlicone.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlicone.classList.add("fa-pause");
        ctrlicone.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlicone.classList.add("fa-pause");
    ctrlicone.classList.remove("fa-play");
}