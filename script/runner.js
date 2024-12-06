//Slider code


let currentIndex = 0; // Start at the first set of slides
const slides = document.querySelectorAll('.slider-item'); // Select all slides
const slidesPerPage = 6; // Number of slides to show at once
const totalSlides = slides.length;

function updateSlides() {
    slides.forEach((slide, index) => {
        if (index >= currentIndex && index < currentIndex + slidesPerPage) {
            slide.style.display = 'block'; // Show this slide
            slide.style.opacity = '1'; // Make it fully visible
        } else {
            slide.style.display = 'none'; // Hide this slide
            slide.style.opacity = '0'; // Make it invisible
        }
    });
}

document.getElementById('nextbutton').addEventListener('click', () => {
    currentIndex += slidesPerPage; // Move to the next set of slides
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Reset to the first set if at the end
    }
    updateSlides(); // Update the display of slides
});

document.getElementById('previousbutton').addEventListener('click', () => {
    currentIndex -= slidesPerPage; // Move to the previous set of slides
    if (currentIndex < 0) {
        currentIndex = Math.max(0, totalSlides - slidesPerPage); // Prevent going negative
    }
    updateSlides(); // Update the display of slides
});

// Initial call to display the first set of slides
updateSlides();


//For the second slider

let presenttIndex = 0; // Start at the first set of slides
const sliding= document.querySelectorAll('.slide-pic'); // Select all slides
const slidePerPage = 6; // Number of slides to show at once
const totalSlide = slides.length;


function shiftSlides () {
  sliding.forEach((slide, index) => {
    if (index >= presenttIndex && index < presenttIndex + slidePerPage) {
      slide.style.display = 'block'; // Show this slide
      slide.style.opacity = '1'; // Make it fully visible
  } else {
      slide.style.display = 'none'; // Hide this slide
      slide.style.opacity = '0'; // Make it invisible
  }
  });
}

document.getElementById('next').addEventListener('click', () => {
 presenttIndex += slidePerPage; // Move to the next set of slides
  if (presenttIndex >= totalSlide) {
    presenttIndex = 0; // Reset to the first set if at the end
  }
  shiftSlides(); // Update the display of slides
});

document.getElementById('prev').addEventListener('click', () => {
  presenttIndex -= slidePerPage; // Move to the previous set of slides
  if (presenttIndex < 0) {
    presenttIndex = Math.max(0, totalSlide - slidePerPage); // Prevent going negative
  }
  shiftSlides(); // Update the display of slides
});

//Call the function

shiftSlides();

//FOR THE FAQ SECTION



mmm = document.getElementById("he");
trimImage = document.getElementById('hie')
mmm.onclick = function () {

  
  // Get all elements with the class 'defi-drop'
  var elements = document.getElementsByClassName("defi-drop");

  // Loop through the elements and toggle their display style
  for (var i = 0; i < elements.length; i++) {
    // If the element is currently visible, hide it; if it's hidden, show it
    if (elements[i].style.display === "none") {
      elements[i].style.display = "block"; // Show the element
      trimImage.style.transform = "rotate(45deg)"
    } else {
      elements[i].style.display = "none"; // Hide the element
      trimImage.style.transform = "rotate(90deg)"
    }
  }
};

mem = document.getElementById("she");
brimImage = document.getElementById("seh")
mem.onclick = function () {
  // Get all elements with the class 'defi-drop'
  var elements = document.getElementsByClassName("defi-drop2");

  // Loop through the elements and toggle their display style
  for (var i = 0; i < elements.length; i++) {
    // If the element is currently visible, hide it; if it's hidden, show it
    if (elements[i].style.display === "none") {
      elements[i].style.display = "block"; // Show the element
      brimImage.style.transform = "rotate(45deg)"
    } else {
      elements[i].style.display = "none"; // Hide the element
      brimImage.style.transform = "rotate(90deg)"
    }
  }
};

mfm = document.getElementById("him");
drivImage = document.getElementById("hem")
mfm.onclick = function () {
  // Get all elements with the class 'defi-drop'
  var elements = document.getElementsByClassName("defi-drop3");

  // Loop through the elements and toggle their display style
  for (var i = 0; i < elements.length; i++) {
    // If the element is currently visible, hide it; if it's hidden, show it
    if (elements[i].style.display === "none") {
      elements[i].style.display = "block"; // Show the element
      drivImage.style.transform = 'rotate(45deg)'
    } else {
      elements[i].style.display = "none"; // Hide the element
      drivImage.style.transform = 'rotate(90deg)'
    }
  }
};

mgm = document.getElementById("her");
turnImage = document.getElementById("hr")
mgm.onclick = function () {
  // Get all elements with the class 'defi-drop'
  var elements = document.getElementsByClassName("defi-drop4");

  // Loop through the elements and toggle their display style
  for (var i = 0; i < elements.length; i++) {
    // If the element is currently visible, hide it; if it's hidden, show it
    if (elements[i].style.display === "none") {
      elements[i].style.display = "block"; // Show the element
      turnImage.style.transform = 'rotate(45deg)'
    } else {
      elements[i].style.display = "none"; // Hide the element
      turnImage.style.transform = 'rotate(90deg)'
    }
  }
};

mhm = document.getElementById("male");
slikImage = document.getElementById("mle")
mhm.onclick = function () {
  // Get all elements with the class 'defi-drop'
  var elements = document.getElementsByClassName("defi-drop5");

  // Loop through the elements and toggle their display style
  for (var i = 0; i < elements.length; i++) {
    // If the element is currently visible, hide it; if it's hidden, show it
    if (elements[i].style.display === "none") {
      elements[i].style.display = "block"; // Show the element
      slikImage.style.transform = 'rotate(45deg)'
    } else {
      elements[i].style.display = "none"; // Hide the element
      slikImage.style.transform = 'rotate(90deg)'
    }
  }
};

mim = document.getElementById("female");
toggleImage = document.getElementById("crt")
mim.onclick = function () {
  // Get all elements with the class 'defi-drop'
  var elements = document.getElementsByClassName("defi-drop6");

  // Loop through the elements and toggle their display style
  for (var i = 0; i < elements.length; i++) {
    // If the element is currently visible, hide it; if it's hidden, show it
    if (elements[i].style.display === "none") {
      elements[i].style.display = "block"; // Show the element
      toggleImage.style.transform = 'rotate(45deg)'
    } else {
      elements[i].style.display = "none"; // Hide the element
      toggleImage.style.transform = 'rotate(90deg)'

    }

  }

}

//Sign in section

const signIn = document.getElementById("sign-btn");

signIn.addEventListener("click", () => {
  window.location.href = "/Netflix-clone/pages/log.html";
});

const contactQuestions = document.getElementById("quest");

contactQuestions.addEventListener("click", () => {
  window.location.href = "/Netflix-clone/pages/contact.html";
});



const getStarted = document.getElementById('strt');
const errorMessage = document.getElementById('error-msg');
const divDisplay = document.getElementById('innpt'); // Ensure this is a form element.

divDisplay.addEventListener('submit', function(event) {
  errorMessage.textContent = '';

  const email = document.getElementById('email').value.trim();

  if (!email) {
    event.preventDefault();
    errorMessage.textContent = 'Input field cannot be empty.';

    //For the timeout
    setTimeout(() => {
      errorMessage.textContent = '';
    }, 1000);

  } else {
    // Remove event.preventDefault() here to allow the redirect
    event.preventDefault()
    window.location.href = '/Netflix-clone/src/home.html';
  }
});

const getStart = document.getElementById('start');
const errMessage = document.getElementById('erro-msg');
const divDisp = document.getElementById('innput'); // Ensure this is a form element.

divDisp.addEventListener('submit', function(event) {
  errMessage.textContent = '';

  const email = document.getElementById('em-il').value.trim();

  if (!email) {
    event.preventDefault();
    errMessage.textContent = 'Input field cannot be empty.';

    //For the timeout
    setTimeout(() => {
      errMessage.textContent = '';
    }, 1000);

  } else {
    // Remove event.preventDefault() here to allow the redirect
    event.preventDefault()
    window.location.href = '/Netflix-clone/src/home.html';
  }
});
