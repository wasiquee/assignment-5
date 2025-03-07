// Select all buttons with the class 'completeBtn'
const completeButtons = document.querySelectorAll(".completeBtn");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");


// Function to handle button click
function handleComplete(event) {
    // Show moral alert
    alert("Great job! Keep completing your tasks.");

    // Convert counts to numbers
    let completed = parseInt(completedCount.innerText);
    let pending = parseInt(pendingCount.innerText);

    // Update values
    if (pending > 0) {
        completedCount.innerText = completed + 1;
        pendingCount.innerText = pending - 1;
        
      
    } else {
        alert("No more pending tasks!");
    }
}

// Add event listener to each button
completeButtons.forEach(button => {
    button.addEventListener("click", handleComplete);
});

