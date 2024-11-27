// Global variables
let timer;
let timeLeft = 60;
let timerRunning = false;

// Start or update the countdown timer
function startTimer() {
  if (timerRunning) return; // Prevent multiple timers from running at once
  timerRunning = true;
  
  timer = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up!");
    } else {
      document.getElementById("background-timer").textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

// Check the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value.toLowerCase();
  const correctAnswer = "Up"; // Replace with the correct answer for the movie/TV/book
  
  const container = document.querySelector(".container");

  if (userAnswer !== correctAnswer.toLowerCase()) {
    // If the answer is wrong, add the shake animation
    container.classList.add("shake");

    // Optionally, remove the shake animation after it finishes to allow for future shakes
    setTimeout(() => {
      container.classList.remove("shake");
    }, 500); // Match the duration of the shake animation
  } else {
    // If the answer is correct, stop the timer
    clearInterval(timer); // Stop the countdown timer
    alert("Correct! Well done.");
  }
}

// Reveal the correct answer when the "Reveal Answer" button is clicked
function revealAnswer() {
  document.getElementById("correctAnswer").style.display = "block";
}

// Start the timer when the page is loaded
window.onload = function() {
  startTimer();
};
