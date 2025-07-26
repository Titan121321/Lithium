/**function updateAvatarPosition() {
  const avatar = document.getElementById('avatar');

  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;

  const startHour = 12.59;
  const endHour = 12.60;
  const totalDuration = endHour - startHour;

  if (currentHour >= endHour) {
    // Day complete, redirect
    alert("🎉 Day Conquered!");
    window.location.href = "newday.html";
    return;
  }

  // Clamp time between 6am and 10pm
  const clampedHour = Math.min(Math.max(currentHour, startHour), endHour);
  const progress = (clampedHour - startHour) / totalDuration;
  const topPercent = 100 - (progress * 100);

  avatar.style.top = `${topPercent}%`;
}

// Run on load and update every minute
window.onload = () => {
  updateAvatarPosition();
  setInterval(updateAvatarPosition, 60000); // Update every minute
};
**/

window.onload = () => {
  const avatar = document.getElementById('avatar');

  // Start animation
  setTimeout(() => {
    avatar.style.top = '0%';
  }, 500);

  // After 10.5 seconds, show alert and redirect
  setTimeout(() => {
    alert("🎉 Day Conquered!");
    window.location.href = "newday.html"; // ← Change to your desired page
  }, 10500);
};
