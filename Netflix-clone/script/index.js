


    function toggleDropdown() {
        const dropdownMenu = document.getElementById("dropdownMenu");
        dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.drop button')) {
            const dropdownMenus = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdownMenus.length; i++) {
                dropdownMenus[i].style.display = "none";
            }
        }
    }

  //   function toggleDropdown() {
  //     const dropdownMenu = document.getElementById("dropdownMenu");
  //     // Check the current display style and toggle it
  //     if (dropdownMenu.style.display === "flex") {
  //         dropdownMenu.style.display = "none"; // Hide the dropdown
  //     } else {
  //         dropdownMenu.style.display = "flex"; // Show the dropdown
  //     }
  // }
  
  // // Close the dropdown if the user clicks outside of it
  // window.onclick = function(event) {
  //     if (!event.target.matches('.drop button')) {
  //         const dropdownMenus = document.getElementsByClassName("dropdown-cont");
  //         for (let i = 0; i < dropdownMenus.length; i++) {
  //             dropdownMenus[i].style.display = "none"; // Hide all dropdowns
  //         }
  //     }
  // }


    

// const showImage = document.querySelector('.show-image');
// const textOverlay = document.querySelector('.text-overlay');

// function animateImage() {
//   return new Promise((resolve) => {
//     showImage.style.transform = 'scale(1.2)';
//     textOverlay.style.opacity = '1';

//     setTimeout(() => {
//       showImage.style.transform = 'scale(1)';
//       textOverlay.style.opacity = '0';
//       resolve();
//     }, 9000); 
//   });
// }

// async function startAnimationLoop() {
//   while (true) {
//     await animateImage();
//     await new Promise((resolve) => setTimeout(resolve, 9000)); // Delay before the next cycle
//   }
// }


// Start the animation loop
// startAnimationLoop();

// document.querySelectorAll('.carousel').forEach(carousel => {
//   const track = carousel.querySelector('.carousel-track');
//   const slides = Array.from(track.children);
//   const nextButton = carousel.querySelector('.next');
//   const prevButton = carousel.querySelector('.prev');
//   const slidesToShow = 3; 
//   const totalSlides = slides.length;
//   let currentIndex = 0;

//   function updateCarousel() {
//       const slideWidth = slides[0].getBoundingClientRect().width;
//       track.style.transform = `translateX(-${currentIndex * slideWidth }px);`
//   }

//   nextButton.addEventListener('click', () => {
//       currentIndex = Math.min(currentIndex + slidesToShow, totalSlides - slidesToShow);
//       updateCarousel();
//   });

//   prevButton.addEventListener('click', () => {
//       currentIndex = Math.max(currentIndex - slidesToShow, 0);
//       updateCarousel();
//     });
// });

// let currentIndex = 0;

// function moveSlide(direction) {
//     const slides = document.querySelectorAll('.slide');
//     currentIndex += direction;

//     if (currentIndex < 0) {
//         currentIndex = slides.length - 1;
//     } else if (currentIndex >= slides.length) {
//         currentIndex = 0;
//     }

//     const offset = -currentIndex * 100;
//     document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
// }

let currentSlideIndex = 0; // Current slide index
const slidesToShow = 5; // Number of slides to show at once
const sliderContainers = document.querySelectorAll('.slider-container');

function moveSlide(direction) {
    sliderContainers.forEach(container => {
        const totalSlides = container.children.length; // Total number of slides
        const maxIndex = totalSlides - slidesToShow; // Maximum index to prevent overflow

        // Update current slide index based on direction
        currentSlideIndex += direction;

        // Ensure currentSlideIndex stays within bounds
        if (currentSlideIndex < 0) {
            currentSlideIndex = 0;
        } else if (currentSlideIndex > maxIndex) {
            currentSlideIndex = maxIndex;
        }

        // Move the slides
        const offset = -currentSlideIndex * (200 + 10); // 200 is the width of each slide + margin
        container.style.transform = `translateX(${offset}px)`; // Move the container
    });
}


let nowSlideIndex = 0; // Current slide index
const slidesToShower = 5; // Number of slides to show at once
const sliderContainer = document.querySelectorAll('.slider-contain');

function moveSlides(direction) {
    sliderContainer.forEach(container => {
        const totalSlide = container.children.length; // Total number of slides
        const maxIndexer = totalSlide - slidesToShower; // Maximum index to prevent overflow

        // Update current slide index based on direction
        nowSlideIndex += direction;

        // Ensure currentSlideIndex stays within bounds
        if (nowSlideIndex < 0) {
            nowSlideIndex = 0;
        } else if (nowSlideIndex > maxIndexer) {
            nowSlideIndex = maxIndexer;
        }

        // Move the slides
        const offseter = -nowSlideIndex * (200 + 10); // 200 is the width of each slide + margin
        container.style.transform = `translateX(${offseter}px)`; // Move the container
    });
}

let presentSlideIndex = 0; // Current slide index
const slidesToShowing = 5; // Number of slides to show at once
const sliderCont = document.querySelectorAll('.slider-containing');

function moveSlidex(direction) {
    sliderCont.forEach(container => {
        const totalSliders = container.children.length; // Total number of slides
        const maxInder = totalSliders - slidesToShowing; // Maximum index to prevent overflow

        // Update current slide index based on direction
        presentSlideIndex += direction;

        // Ensure currentSlideIndex stays within bounds
        if (presentSlideIndex < 0) {
            presentSlideIndex = 0;
        } else if (presentSlideIndex > maxInder) {
            presentSlideIndex = maxInder;
        }

        // Move the slides
        const offseting = -presentSlideIndex * (200 + 10); // 200 is the width of each slide + margin
        container.style.transform = `translateX(${offseting}px)`; // Move the container
    });
}

let recentSlideIndex = 0; // Current slide index
const slidesToShowfor = 5; // Number of slides to show at once
const sliderConty = document.querySelectorAll('.slider-conting');

function moveSlidey(direction) {
    sliderConty.forEach(container => {
        const totalSlidy = container.children.length; // Total number of slides
        const maxIndxing = totalSlidy - slidesToShowfor; // Maximum index to prevent overflow

        // Update current slide index based on direction
        recentSlideIndex += direction;

        // Ensure currentSlideIndex stays within bounds
        if (recentSlideIndex < 0) {
            recentSlideIndex = 0;
        } else if (recentSlideIndex > maxIndxing) {
            recentSlideIndex = maxIndxing;
        }

        // Move the slides
        const upseting = -recentSlideIndex * (200 + 10); // 200 is the width of each slide + margin
        container.style.transform = `translateX(${upseting}px)`; // Move the container
    });
}

let latestSlideIndex = 0; // Current slide index
const slidesToShowoff = 5; // Number of slides to show at once
const sliderContyey = document.querySelectorAll('.slider-containerer');

function moveSlided(direction) {
    sliderContyey.forEach(container => {
        const totalSlidyey = container.children.length; // Total number of slides
        const maxIndxering = totalSlidyey - slidesToShowoff; // Maximum index to prevent overflow

        // Update current slide index based on direction
        latestSlideIndex += direction;

        // Ensure currentSlideIndex stays within bounds
        if (latestSlideIndex < 0) {
            latestSlideIndex = 0;
        } else if (latestSlideIndex > maxIndxering) {
            latestSlideIndex = maxIndxering;
        }

        // Move the slides
        const upsetter = -latestSlideIndex * (200 + 10); // 200 is the width of each slide + margin
        container.style.transform = `translateX(${upsetter}px)`; // Move the container
    });
}

const exitBtn = document.getElementById('exit')

exitBtn.addEventListener('click', ()=>{
    window.location.href = '../Netflix-clone/src/home.html';
})




























