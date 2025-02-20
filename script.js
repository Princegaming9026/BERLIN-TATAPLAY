document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("liveStream");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");

    // Check if HLS is supported
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource('YOUR_M3U8_STREAM_URL'); // Replace with your M3U8 URL
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari
        video.src = 'YOUR_M3U8_STREAM_URL'; // Replace with your M3U8 URL
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    }

    playBtn.addEventListener("click", function() {
        video.play();
    });

    pauseBtn.addEventListener("click", function() {
        video.pause();
    });
});
