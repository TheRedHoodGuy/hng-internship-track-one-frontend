// Your JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
  function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4]; // Get time in HH:MM:SS
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("time").textContent = `${utcTime}`;
    document.getElementById("day").textContent = `${dayOfWeek}`;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
});
