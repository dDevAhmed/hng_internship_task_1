function updateTimeAndDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();

    // Get the current day of the week
    const currentDay = days[now.getUTCDay()];

    // Get the current time in UTC
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;

    // Update the HTML content
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `${currentTime}`;
    document.querySelector('[data-testid="currentDay"]').textContent = `${currentDay}`;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);


// Function to check scroll position and toggle 'active' class on back to top button
function checkScroll() {
    const backToTop = document.querySelector('.back-to-top');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
}

// Attach the function to the window's scroll event
window.addEventListener('scroll', checkScroll);