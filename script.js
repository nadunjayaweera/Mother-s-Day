document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var textAnimation = document.querySelector(".text-animation");
    textAnimation.classList.add("hide"); // Add the 'hide' class to hide the first message
    var secondMessage = document.querySelector(".text-animation-second");
    secondMessage.classList.add("show"); // Add the 'show' class to show the second message

    // Hide the text image
    var textImage = document.querySelector(".text-animation");
    textImage.style.display = "none";

    // Call function to hide second message after 2 seconds
    hideSecondMessage();
  }, 3000); // Show second message after 2 seconds (2000 milliseconds)

  function hideSecondMessage() {
    setTimeout(function () {
      var secondMessage = document.querySelector(".text-animation-second");
      secondMessage.classList.add("hide");

      var animatedImages = document.querySelectorAll(
        ".animated-image, .animated-image-second"
      );
      animatedImages.forEach(function (image) {
        image.classList.add("hide");
      });
      showThirdImage();
    }, 4000); // Hide second message after 2 seconds (2000 milliseconds)
  }

  function showThirdImage() {
    // Show the third image
    var thirdImage = document.querySelector(".animated-image-third");
    thirdImage.style.opacity = "1";

    var secondMessage = document.querySelector(".text-animation-third");
    secondMessage.classList.add("show");
  }
});
