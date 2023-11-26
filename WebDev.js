document.addEventListener('DOMContentLoaded', function () {
    const interactiveBoxes = document.querySelectorAll('.interactive-box');
  
    interactiveBoxes.forEach(box => {
      box.addEventListener('click', function () {
        // Toggle the 'zoomed' class on the clicked box
        this.classList.toggle('zoomed');
      });
    });
  });
  