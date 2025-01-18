document.addEventListener('DOMContentLoaded', () => {
  // Text animation setup
  var textWrapper = document.querySelector('.ml12');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  // First animation - text animation
  anime.timeline()
    .add({
      targets: '.ml12 .letter',
      translateY: [100,0],
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 100 * i,
      complete: function() {
        // Start other animations after text animation completes
        TweenMax.to(".left", 3, {
          left: "0%",
          ease: Expo.easeInOut,
          delay: 0.5
        });

        TweenMax.staggerTo(
          ".header > p", 
          1, 
          { 
            y: 0,
            opacity: 1,
            ease: Power2.easeOut,
            delay: 2.5
          }, 
          0.2 
        );

        TweenMax.staggerTo(
          ".img", 
          1, 
          { 
            y: 0,
            opacity: 1,
            ease: Power2.easeOut,
            delay: 3
          }, 
          0.2 
        );
      }
    });
});