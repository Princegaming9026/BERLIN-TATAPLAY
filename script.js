document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("liveStream");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");

    playBtn.addEventListener("click", function() {
        video.play();
    });

    pauseBtn.addEventListener("click", function() {
        video.pause();
    });
});
