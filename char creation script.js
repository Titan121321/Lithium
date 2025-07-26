const characterImg = document.getElementById('characterImg');
const uploadImg = document.getElementById('uploadImg');

uploadImg.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            characterImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('startBtn').addEventListener('click', () => {
    const name = document.getElementById('characterName').value.trim();
    if (!name) {
        alert("Please enter a character name.");
        return;
    }

    // Save character name & image to local storage
    localStorage.setItem('characterName', name);
    localStorage.setItem('characterImage', characterImg.src);

    // Navigate to next interface (replace with actual page)
    window.location.href = "interface2.html";
});
function startGame() {
    const charName = document.getElementById("topTextbox").value;
    const extra = document.getElementById("bottomTextbox").value;
    alert(`Starting game with character: ${charName}\nNote: ${extra}`);
}
