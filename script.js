// Object to store passwords and their corresponding websites
const passwordRedirectMap = {
  "arifaankhi": "https://ankhi.netlify.app",
};

const usernames = {
  "ankhi.admin": "https://ankhi.netlify.app",
}; 

// Function to validate the password and redirect to the corresponding website
function validatePassword() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the entered password exists in the passwordRedirectMap
  if (password in passwordRedirectMap) {
    // Check if the entered username exists in the usernames map
    if (username in usernames) {
      // Redirect to the corresponding website
      window.location.href = usernames[username];
    } else {
      var error = document.getElementById("errorMessage");
      error.textContent = "Incorrect Username. Please try again.";
    }
  } else {
    // Display error message if the password is incorrect
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Incorrect password. Please try again.";
  }
} 