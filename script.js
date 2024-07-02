// Your JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    let timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("time").textContent = timeString;
  }

  // Update time initially
  updateTime();

  // Update time every second
  setInterval(updateTime, 1000);

  function updateCurrentDay() {
    // Array of days in a week
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Get today's date
    const now = new Date();

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayIndex = now.getDay();

    // Update the HTML with the current day
    document.getElementById("day").textContent = days[dayIndex];
  }

  // Update current day initially
  updateCurrentDay();

  // Update current day every minute (optional)
});
