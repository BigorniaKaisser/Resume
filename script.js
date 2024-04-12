document.addEventListener("DOMContentLoaded", function() {
    var rotatingImage = document.getElementById("rotating-image");
    var images = ["Command_Seal.webp","Jojos-Bizarre-Adventure.png","Monogatari.png"];
    var index = 0;
  
    function rotateImages() {
      rotatingImage.style.opacity = 0;
  
      setTimeout(function() {
        rotatingImage.src = images[index];
        index = (index + 1) % images.length;
  
        rotatingImage.style.opacity = 1;
      }, 500);
    }
  
    rotateImages();
  
    setInterval(rotateImages, 3000);
  });
  