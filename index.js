// Function to update the current day of the week
function updateDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Day: ${dayOfWeek}`;
}

// Function to update the current UTC time in milliseconds
function updateUTCTime() {
    const time = new Date()
    const currentTimeUTC = time.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time (milliseconds): ${currentTimeUTC}`;
}

// Call the update functions when the page loads
window.addEventListener("load", () => {
    updateDayOfTheWeek();
    updateUTCTime();
});