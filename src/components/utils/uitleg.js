document.addEventListener('DOMContentLoaded', function() {
    var uitlegAnchor = document.getElementById("uitlegAnchor");
    var uitleg = document.getElementById("uitleg");
  
    uitlegAnchor.addEventListener("click", function(e) {
      e.preventDefault();
      uitleg.play();
    });
  });