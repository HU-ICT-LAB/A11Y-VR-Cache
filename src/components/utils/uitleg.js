document.addEventListener('DOMContentLoaded', function() {
    var uitlegAnchor = document.getElementById("uitlegAnchor");
    var uitleg = document.getElementById("uitleg");
  
    uitlegAnchor.addEventListener("click", function(e) {
      e.preventDefault();
      
      // Check if the media element is paused or ended before playing
      if (uitleg.paused || uitleg.ended) {
        uitleg.play();
      } else {
        // If the media element is already playing, pause it
        uitleg.pause();
      }
    });
  });