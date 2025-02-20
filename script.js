document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("liveStream");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");

    // Check if HLS is supported
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource('https://cdn4504.hokpi334amve.com/stream2/i-cdn-0/e0cfb51d0484a3b1f09d013c6f8d5cbe/MJTMsp1RshGTygnMNRUR2N2MSlnWXZEdMNDZzQWe5MDZzMmdZJTO1R2RWVHZDljekhkSsl1VwYnWtx2cihVT2lFVOhWWt1UNNdVV1kVbVpXWq5EaPR0Z39ERFNTWq10dZpWTw0kaGhWWtVVP:1740057870:178.212.35.166:0119c088bc7e4e3be70ff4d5a6c6f92b523c2505ed82fb23ca0e3257bc46d3f7/720/index.m3u8'); // Replace with your M3U8 URL
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari
        video.src = 'https://cdn4504.hokpi334amve.com/stream2/i-cdn-0/e0cfb51d0484a3b1f09d013c6f8d5cbe/MJTMsp1RshGTygnMNRUR2N2MSlnWXZEdMNDZzQWe5MDZzMmdZJTO1R2RWVHZDljekhkSsl1VwYnWtx2cihVT2lFVOhWWt1UNNdVV1kVbVpXWq5EaPR0Z39ERFNTWq10dZpWTw0kaGhWWtVVP:1740057870:178.212.35.166:0119c088bc7e4e3be70ff4d5a6c6f92b523c2505ed82fb23ca0e3257bc46d3f7/720/index.m3u8'; // Replace with your M3U8 URL
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
