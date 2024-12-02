// THE VIDEO
// Select elements
const video = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");
const muteButton = document.getElementById("muteButton");

// Toggle play/pause functionality
playButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>PAUSE'; // Change to Pause icon
    } else {
        video.pause();
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>PLAY'; // Change back to Play icon
    }
});

// Toggle mute/unmute functionality
muteButton.addEventListener("click", () => {
    video.muted = !video.muted;
    muteButton.innerHTML = video.muted
        ? '<i class="fa-solid fa-volume-mute"></i>' // Mute icon
        : '<i class="fa-solid fa-volume-up"></i>'; // Unmute icon
});



// FOR THE POP DISPLAY
// JavaScript code

// Select elements
const favoriteIcon = document.getElementById("favorite-icon");
const favoriteText = document.getElementById("favorite-text");
const favoriteText2 = document.getElementById("favorite-text-2");

// Add click event listener to the favorite icon
favoriteIcon.addEventListener("click", function() {
    // Reset the first favorite text to "Add to My Playlist"
    favoriteText.textContent = "Add to My Playlist";
    favoriteText.classList.remove('clicked'); // Reset any previous state
});

// Add click event listener to the first favorite text
favoriteText.addEventListener("click", function() {
    // Toggle the text between "Add to My Playlist" and "I like this"
    if (favoriteText.textContent === "Add to My Playlist") {
        favoriteText.textContent = "I like this";
        favoriteText.classList.add('clicked'); // Optional: Change color or style
    } else {
        favoriteText.textContent = "Add to My Playlist";
        favoriteText.classList.remove('clicked');
    }
});

// Add click event listener to the second favorite text
favoriteText2.addEventListener("click", function() {
    // Toggle the text of the second favorite text
    if (favoriteText2.textContent === "Add to favorite") {
        favoriteText2.textContent = "Favorite added!";
        favoriteText2.classList.add('clicked'); // Optional: Change color or style
    } else {
        favoriteText2.textContent = "Add to favorite";
        favoriteText2.classList.remove('clicked');
    }
});






















document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const nextButton = carousel.querySelector('.next');
    const prevButton = carousel.querySelector('.prev');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].offsetWidth; // Get the width of a single slide
    let currentIndex = 0;

    // Function to update the position of the carousel
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Next button functionality
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Previous button functionality
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
});



















