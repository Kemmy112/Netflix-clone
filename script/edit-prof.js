// Get references to the buttons
const saveBtn = document.querySelector('.save-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const deleteBtn = document.querySelector('.delete-btn');
// Get references to the form and its inputs
const profileForm = document.querySelector('.edit-profile-form');
const profileNameInput = document.querySelector('#profile-name');
const languageSelect = document.querySelector('#language');
const gameHandleInput = document.querySelector('#game-handle');
const maturitySettingSelect = document.querySelector('#maturity-setting');
// Store initial values for cancellation
const initialFormState = {
    profileName: profileNameInput.value,
    language: languageSelect.value,
    gameHandle: gameHandleInput.value,
    maturitySetting: maturitySettingSelect.value,
};
// Define the manage-prof page URL
const manageProfPageURL = './manage-prof.html'; // Adjust the path as needed
// Save button handler
saveBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = {
        profileName: profileNameInput.value,
        language: languageSelect.value,
        gameHandle: gameHandleInput.value,
        maturitySetting: maturitySettingSelect.value,
    };
    console.log('Profile saved:', formData);
    alert('Your changes have been saved successfully.');
    // Redirect to manage-prof page
    window.location.href = manageProfPageURL;
});
// Cancel button handler
cancelBtn.addEventListener('click', () => {
    // Restore initial values
    profileNameInput.value = initialFormState.profileName;
    languageSelect.value = initialFormState.language;
    gameHandleInput.value = initialFormState.gameHandle;
    maturitySettingSelect.value = initialFormState.maturitySetting;
    alert('Changes have been discarded.');
    // Redirect to manage-prof page
    window.location.href = manageProfPageURL;
});
// Delete button handler
deleteBtn.addEventListener('click', () => {
    console.log('Profile deleted.');
    alert('The profile has been deleted.');
    // Optional: Add logic to reset the form or redirect the user
    profileForm.reset(); // Clear the form
});