document.addEventListener('DOMContentLoaded', function() {
    // Initialize Slick Carousel
    $('.image-gallery').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  
    // Share buttons functionality
    const shareButtons = document.querySelectorAll('.tile-share-button');
    console.log(shareButtons);
  
    async function copyText(e) {
      // Prevent button from going to the site
      e.preventDefault();
      const link = this.getAttribute('link');
      console.log(link);
      try {
        await navigator.clipboard.writeText(link);
        alert("Copied the text: " + link);
      } catch (err) {
        console.error(err);
      }
    }
  
    shareButtons.forEach(button => button.addEventListener('click', copyText));
  });