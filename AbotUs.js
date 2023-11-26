

let zoomed = false;
        function openModal(name, imgUrl, description,linkUrl) {
            var modal = document.getElementById('myModal');
            var modalImg = document.getElementById('modalImg');
            var captionText = document.getElementById('caption');

            modal.style.display = 'block';
            modalImg.src = imgUrl;
            captionText.innerHTML = `<h4>${name}</h4><p>${description}</p><p><a href="${linkUrl}" target="_blank">Learn more</a></p>`;;
            modalImg.style.transform = 'scale(1)';
            zoomed = false;
        }

        // Close the modal
        function closeModal() {
            var modal = document.getElementById('myModal');
            modal.style.display = 'none';
        }

        // Toggle zoom
        function toggleZoom() {
            var modalImg = document.getElementById('modalImg');
            zoomed = !zoomed;
            modalImg.style.transform = zoomed ? 'scale(1.5)' : 'scale(1)';
        }