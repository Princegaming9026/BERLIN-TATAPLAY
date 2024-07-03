<?php
// Define the content of your .m3u playlist
$m3u_content = <<<EOT
#EXTM3U
#EXTINF:-1 tvg-id="" tvg-name="Shree Ichchhapuran Balaji Mandir" tvg-logo="https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SIBM_Thumbnail-v4/SIBM_Thumbnail.png",Shree Ichchhapuran Balaji Mandir
#EXT-X-KEY:METHOD=SAMPLE-AES,URI="data:text/plain;base64,w2h8Z8yP7h6Pbg32pFYJAw"
https://delta45tatasky.akamaized.net/out/i/1412.mpd
EOT;

// Check if the request is from an OTT player like NS Player
$is_ott_player = isset($_SERVER['HTTP_USER_AGENT']) && strpos($_SERVER['HTTP_USER_AGENT'], 'NS Player') !== false;

// If the request is from an OTT player, serve the .m3u playlist
if ($is_ott_player) {
    header('Content-Type: audio/mpegurl');
    echo $m3u_content;
} else {
    // Otherwise, show a message that the site is closed for normal users
    $message = "This site is closed for normal users. Please use an OTT player like NS Player to access the playlist.";
    echo "<p>$message</p>";
}
?>
