//Slider code

let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".slider-item"); // variables defined
  const totalSlides = slides.length;

  // Update current index based on direction
  currentIndex += direction;

  // Wrap around if out of bounds
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Calculate the offset for the slider content
  const offset = -currentIndex * (slides[0].clientWidth + 20); // 20 is the margin
  document.querySelector(
    ".slider-content"
  ).style.transform = `translateX(${offset}px)`;
}

// For the second slider

let presenttIndex = 0;

function shiftSlide(direction) {
  const sliding = document.querySelectorAll(".slide-pic");
  const totalSlide = sliding.length;

  // Update current index based on direction
  presenttIndex += direction;

  // Wrap around if out of bounds
  if (presenttIndex < 0) {
    presenttIndex = totalSlide - 1;
  } else if (presenttIndex >= totalSlide) {
    presenttIndex = 0;
  }

  // Calculate the offset for the slider content
  const offset = -presenttIndex * (sliding[0].clientWidth + 20); // 20 is the margin
  document.querySelector(
    ".slide-cont"
  ).style.transform = `translateX(${offset}px)`;
}

//FOR THE FAQ SECTION

// const plusHits = document.querySelectorAll(".p-plus");
// const composeDrop = document.querySelector(".defi-drop");

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


const signIn = document.getElementById("sign-btn");

signIn.addEventListener("click", () => {
  window.location.href = "/Netflix-clone/pages/log.html";
});

const contactQuestions = document.getElementById("quest");

contactQuestions.addEventListener("click", () => {
  window.location.href = "/Netflix-clone/pages/contact.html";
});

