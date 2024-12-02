// Define the target URL for the edit profile page
const editProfilePageURL = './edit-prof.html'; // Adjust the path as needed

// Function to handle redirection
function redirectToEditProfile() {
    window.location.href = editProfilePageURL;  // Redirect to the edit profile page
}

// Get the profile tiles (one, two, three)
const profileTiles = document.querySelectorAll('.add-profile-tile.one, .add-profile-tile.two, .add-profile-tile.three');

// Add click event listeners to each of the profile tiles
profileTiles.forEach(tile => {
    tile.addEventListener('click', () => {
        redirectToEditProfile();
    });
});

