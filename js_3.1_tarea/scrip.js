let likes = 3;
const likeBtn = document.getElementById("like-button");
const likeCount = document.getElementById("like-count");

likeBtn.addEventListener("click", () => {
likes++;
likeCount.textContent = `${likes} like(s)`;
});