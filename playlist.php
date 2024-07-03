<?php
header('Content-Type: audio/x-mpegurl');

// Define your redirect URL here
$redirectURL = "https://t.me/BERLIN_IS_BERLIN";

echo "#EXTM3U\n";
echo "#EXTM3U TATAPLAY - BERLIN\n";
echo "#EXTINF:-1 tvg-id=\"\" tvg-name=\"Shirdi Sai Baba\" tvg-logo=\"https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56386-kfc14w60-v4/imageContent-56386-kfc14w60-m4.png\",Shirdi Sai Baba\n";
echo "#EXT-X-KEY:METHOD=SAMPLE-AES,URI=\"data:text/plain;base64,eQlOBz4xkeJQUrREygnaTw\"\n";
echo "https://delta45tatasky.akamaized.net/out/i/554.mpd\n";
echo "#EXTINF:-1 tvg-id=\"\" tvg-name=\"Somnath Temple\" tvg-logo=\"https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56389-kfdgngts-v3/imageContent-56389-kfdgngts-m3.png\",Somnath Temple\n";
echo "#EXT-X-KEY:METHOD=SAMPLE-AES,URI=\"data:text/plain;base64,bw3WHU6nHpEvgTpJUgUkLA\"\n";
echo "https://delta45tatasky.akamaized.net/out/i/722.mpd\n";
echo "#EXTINF:-1 tvg-id=\"\" tvg-name=\"Tata Play Fitness\" tvg-logo=\"https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-405-j5jr3sz4-v2/imageContent-405-j5jr3sz4-m2.png\",Tata Play Fitness\n";
echo "#EXT-X-KEY:METHOD=SAMPLE-AES,URI=\"data:text/plain;base64,FRRNnNHblFy+8vtSksC4Eg\"\n";
echo "https://bpweb4.akamaized.net/bpk-tv/irdeto_com_Channel_209/output/manifest.mpd\n";
echo "#EXTINF:-1 tvg-id=\"\" tvg-name=\"Tata Play Fitness\" tvg-logo=\"https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-405-j5jr3sz4-v2/imageContent-405-j5jr3sz4-m2.png\",Tata Play Fitness\n";
echo "#EXT-X-KEY:METHOD=SAMPLE-AES,URI=\"data:text/plain;base64,FRRNnNHblFy+8vtSksC4Eg\"\n";
echo "https://bpweb4.akamaized.net/bpk-tv/irdeto_com_Channel_209/output/manifest.mpd\n";
echo "#EXTINF:-1 tvg-id=\"\" tvg-name=\"Tata Play Beauty\" tvg-logo=\"https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12282-ja02jlp4-v2/imageContent-12282-ja02jlp4-m2.png\",Tata Play Beauty\n";
echo "#EXT-X-KEY:METHOD=SAMPLE-AES,URI=\"data:text/plain;base64,oAOzoWbLiN5lNWEA3R7kvw\"\n";
echo "$redirectURL\n";
?>
