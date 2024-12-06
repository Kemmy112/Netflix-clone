
// let currentIndex = 0;
    
//     function slide(direction) {
//       const slider = document.getElementById('slider');
//       const slides = document.querySelectorAll('.slide');
//       const slideWidth = slides[0].offsetWidth + 15; // Slide width + margin

//       // Update the current index
//       currentIndex += direction;
//       if (currentIndex < 0) {
//         currentIndex = 0;
//       } else if (currentIndex > slides.length - 3) { // Show 3 slides at a time
//         currentIndex = slides.length - 3;
//       }
      
//       // Apply translation
//       slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     }




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


    
const showImage = document.querySelector('.show-image');
const textOverlay = document.querySelector('.text-overlay');

function animateImage() {
  return new Promise((resolve) => {
    showImage.style.transform = 'scale(1.2)';
    textOverlay.style.opacity = '1';

    setTimeout(() => {
      showImage.style.transform = 'scale(1)';
      textOverlay.style.opacity = '0';
      resolve();
    }, 9000); 
  });
}

async function startAnimationLoop() {
  while (true) {
    await animateImage();
    await new Promise((resolve) => setTimeout(resolve, 9000)); // Delay before the next cycle
  }
}

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

// Dropdown toggle function
// function toggleDropdown() {
//     const dropdownMenu = document.getElementById('dropdownMenu');
//     dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
// }

// // Close dropdown when clicking outside
// window.onclick = function(event) {
//     if (!event.target.matches('.drop button')) {
//         const dropdowns = document.getElementsByClassName("dropdown-cont");
//         for (let i = 0; i < dropdowns.length; i++) {
//             const openDropdown = dropdowns[i];
//             if (openDropdown.style.display === 'block') {
//                 openDropdown.style.display = 'none';
//             }
//         }
//     }
// }

























