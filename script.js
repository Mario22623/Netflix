document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById("videoPlayer");
    const audioTracksSelect = document.getElementById("audioTracks");
    const changeAudioBtn = document.getElementById("changeAudioBtn");

    // Step 1: Make video player
    // This is already done in HTML

    // Step 2: Add audio change support
    changeAudioBtn.addEventListener("click", function() {
        const selectedAudioTrack = audioTracksSelect.value;
        if (selectedAudioTrack) {
            videoPlayer.audioTracks[0].enabled = false; // Disable the current audio track
            videoPlayer.audioTracks[selectedAudioTrack].enabled = true; // Enable the selected audio track
        }
    });

    // Step 3: Auto detect audio tracks from video source
    videoPlayer.addEventListener("loadedmetadata", function() {
        for (let i = 0; i < videoPlayer.audioTracks.length; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.text = `Audio Track ${i + 1}`;
            audioTracksSelect.appendChild(option);
        }
    });

    // Step 5: Network URL support
    // To load a video from a network URL, set the 'src' attribute of the video element dynamically
    // Example: videoPlayer.src = "http://example.com/video.mp4";
});
