let logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function (event) {

    // Prevent the default behavior of the button (navigation)
    event.preventDefault();
    // Display a confirmation dialog
    const userConfirmed = window.confirm("Are you sure you want to go home?");

    // Check if the user confirmed
    if (userConfirmed) {
        // Perform the logout action here
        // You can redirect the user to a logout page or perform any other relevant action
        window.location.href = "/";
    }
    else {
        // User cancelled the logout
        console.log("User cancelled the go to home.");
    }

});
