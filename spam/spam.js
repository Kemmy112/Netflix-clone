//Logged from runner.js for the slider. This method was no longer used

//Option 2

// let currentIndex = 0; // Start at the first set of slides
// const slides = document.querySelectorAll('.slider-item'); // Select all slides
// const slidesPerPage = 6; // Number of slides to show at once
// const totalSlides = slides.length;

// function updateSlides() {
//     slides.forEach((slide, index) => {
//         if (index >= currentIndex && index < currentIndex + slidesPerPage) {
//             slide.style.display = 'block'; // Show this slide
//             slide.style.opacity = '1'; // Make it fully visible
//         } else {
//             slide.style.display = 'none'; // Hide this slide
//             slide.style.opacity = '0'; // Make it invisible
//         }
//     });
// }

// document.getElementById('nextbutton').addEventListener('click', () => {
//     currentIndex += slidesPerPage; // Move to the next set of slides
//     if (currentIndex >= totalSlides) {
//         currentIndex = 0; // Reset to the first set if at the end
//     }
//     updateSlides(); // Update the display of slides
// });

// document.getElementById('previousbutton').addEventListener('click', () => {
//     currentIndex -= slidesPerPage; // Move to the previous set of slides
//     if (currentIndex < 0) {
//         currentIndex = Math.max(0, totalSlides - slidesPerPage); // Prevent going negative
//     }
//     updateSlides(); // Update the display of slides
// });

// // Initial call to display the first set of slides
// updateSlides();

//For the second slider

// let presenttIndex = 0; // Start at the first set of slides
// const sliding= document.querySelectorAll('.slide-pic'); // Select all slides
// const slidePerPage = 6; // Number of slides to show at once
// const totalSlide = slides.length;


// function shiftSlides () {
//   sliding.forEach((slide, index) => {
//     if (index >= presenttIndex && index < presenttIndex + slidePerPage) {
//       slide.style.display = 'block'; // Show this slide
//       slide.style.opacity = '1'; // Make it fully visible
//   } else {
//       slide.style.display = 'none'; // Hide this slide
//       slide.style.opacity = '0'; // Make it invisible
//   }
//   });
// }

// document.getElementById('next').addEventListener('click', () => {
//  presenttIndex += slidePerPage; // Move to the next set of slides
//   if (presenttIndex >= totalSlide) {
//     presenttIndex = 0; // Reset to the first set if at the end
//   }
//   shiftSlides(); // Update the display of slides
// });

// document.getElementById('prev').addEventListener('click', () => {
//   presenttIndex -= slidePerPage; // Move to the previous set of slides
//   if (presenttIndex < 0) {
//     presenttIndex = Math.max(0, totalSlide - slidePerPage); // Prevent going negative
//   }
//   shiftSlides(); // Update the display of slides
// });

// //Call the function

// shiftSlides();


//Logged from runner,js for the FAQs section because the code was no longer needed.

// plusHits.forEach((plusHit) => {
//   plusHit.addEventListener('click', () => {
//     if (composeDrop) {
//       composeDrop.style.display = composeDrop.style.display === 'none' ? 'block' : 'none';
//     } else {
//       console.error('Element #minibox not found');
//     }
//   });
// });


//Logged from runner.js because this section is not complete and should be kept as a spam

// const frequentQuestions = document.getElementById("faq");

// frequentQuestions.addEventListener("click", () => {
//   window.location.href = "/Netflix-clone/src/faqs/faqs.html";
// });
