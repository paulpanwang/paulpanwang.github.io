document.addEventListener('DOMContentLoaded', function() {
  // Set FlexGS video playback rate to 6x
  const flexgsVideo = document.getElementById('flexgs-video');
  if (flexgsVideo) {
    flexgsVideo.addEventListener('loadedmetadata', function() {
      flexgsVideo.playbackRate = 6.0;
    });
  }
});
