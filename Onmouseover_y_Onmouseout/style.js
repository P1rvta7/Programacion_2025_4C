let isPlaying = false;

function togglePlay() {
const btn = document.querySelector('.play-button');
isPlaying = !isPlaying;
btn.textContent = isPlaying ? '⏸️' : '▶️';
}

function handleLogin() {
alert("Login feature coming soon!");
}

function handleSubscribe() {
alert("Subscribed to Example User Name!");
}

function changeVideo(title) {
document.getElementById("video-title").textContent = title;
}
