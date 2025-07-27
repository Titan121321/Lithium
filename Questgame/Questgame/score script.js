function goToVanquished() {
  window.location.href = 'vanquest.html';
}

window.onload = () => {
  const username = localStorage.getItem('username') || 'User123';
  const score = localStorage.getItem('userScore') || '0';  // ✅ fixed key to match vanquest.js
  document.getElementById('scoreDisplay').innerText = `${username}: ${score} pts`;
};

