
function changeText() {
    var nameElement = document.getElementById("name");
    var roleElement = document.getElementById("role");

    setTimeout(function () {
        setTimeout(function () {
          roleElement.style.opacity = 0;
          setTimeout(function () {
            roleElement.innerHTML = "I am a Full Stack Developer";
            roleElement.style.opacity = 1;
          }, 1000);
        }, 1000);
      
    }, 3000);

    
    setTimeout(function () {
      nameElement.style.opacity = 0; // Fade out

      setTimeout(function () {
        nameElement.innerHTML = "Aditya Gupta";
        nameElement.style.opacity = 1; // Fade in
      }, 1000);
    }, 5000);
  }

  // Call the function when the page loads
window.onload = changeText;


