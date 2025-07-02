function showCategory(category) {
  // Get all publication items
  const publications = document.querySelectorAll('.publication-item');
  const tabs = document.querySelectorAll('.tab-button');

  // Remove active class from all tabs
  tabs.forEach(tab => tab.classList.remove('active'));

  // Add active class to clicked tab
  document.querySelector(`[data-category="${category}"]`).classList.add('active');

  // Show/hide publications based on category
  publications.forEach(pub => {
    if (category === 'all' || pub.dataset.category === category) {
      pub.classList.remove('hidden');
      pub.style.display = 'block';
    } else {
      pub.classList.add('hidden');
      pub.style.display = 'none';
    }
  });
}

// Initialize with all publications shown
document.addEventListener('DOMContentLoaded', function() {
  showCategory('all');

  // Set FlexGS video playback rate to 6x
  const flexgsVideo = document.getElementById('flexgs-video');
  if (flexgsVideo) {
    flexgsVideo.addEventListener('loadedmetadata', function() {
      flexgsVideo.playbackRate = 6.0;
    });
  }
});