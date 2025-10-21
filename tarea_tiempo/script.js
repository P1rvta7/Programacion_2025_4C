function cityAlert(city) {
alert("Loading weather report for " + city + "...");
}

function acceptCookies() {
document.getElementById("cookie").remove();
}

function convertTemps(selectElement) {
const highs = document.querySelectorAll(".high");
const lows = document.querySelectorAll(".low");
const isFahrenheit = selectElement.value === "F";

for (let i = 0; i < highs.length; i++) {
    let high = parseInt(highs[i].innerText);
    let low = parseInt(lows[i].innerText);

    if (isFahrenheit) {
      highs[i].innerText = Math.round((high * 9/5) + 32);
      lows[i].innerText = Math.round((low * 9/5) + 32);
    } else {
      highs[i].innerText = Math.round((high - 32) * 5/9);
      lows[i].innerText = Math.round((low - 32) * 5/9);
    }
}
}
