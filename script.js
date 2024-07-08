// Function to close the popup
function closePopup() {
    var popup = document.querySelector('.popup');
    popup.classList.add('hidden');

    // Remove the blur effect
    var blur = document.querySelector('.blur');
    blur.style.display = 'none';

    // Show the site content
    var siteContent = document.querySelector('.site-content');
    siteContent.classList.add('visible');
}
