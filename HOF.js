document.addEventListener('DOMContentLoaded', function () {
    const imageScroller = document.getElementById('imageScroller');
    const images = imageScroller.getElementsByTagName('img');
    let currentIndex = 0;
  
    function showImage(index) {
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
      }
      images[index].style.display = 'block';
    }
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    function showPreviousImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  
    // Initially show the first image
    showImage(currentIndex);
  
    // Add event listeners to buttons
    document.querySelector('.switch-buttons button:nth-child(1)').addEventListener('click', showPreviousImage);
    document.querySelector('.switch-buttons button:nth-child(2)').addEventListener('click', showNextImage);
  });
  