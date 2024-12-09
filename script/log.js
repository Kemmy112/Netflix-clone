
const learnMore = document.getElementById('show-up');
const hiddenDiv = document.getElementById('revv');

learnMore.addEventListener('click', ()=>{

  hiddenDiv.style.display = 'block';
});

//Form mechanism

const form = document.getElementById('sign-form');

const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
  // Clear previous error message
  errorMessage.textContent = '';

  // Get the values from the input fields
  const email = document.getElementById('e-mail').value.trim();
  const password = document.getElementById('pswd').value.trim();

  // Validate the fields
  if (!email || !password) {
      event.preventDefault(); // Prevent form submission
      errorMessage.textContent = 'Please fill in both email and password fields.';

      setTimeout(() => {
        errorMessage.textContent = '';
      }, 1300);

  }else{
    event.preventDefault(); // Prevent form submission

    window.location.href = '/src/home.html';

  }
});
