function playAudio() {
    var audio = new Audio('assets/morse.wav');
    audio.volume = 0.00119;
    setTimeout(function () {
        try {
            audio.play();
        } catch (error) {
            console.error(error);
        }
    }, 1000);
}

playAudio();

const code1 = [
    "9",
    "1",
    "1"
];

const code2 = [
    "1",
    "9",
    "0"
];

let codePosition = 0;
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === code1[codePosition] || key === code2[codePosition]) {
        codePosition++;
        if (codePosition === code1.length || codePosition === code2.length) {
            var dataSpan = document.getElementById("hm")
            dataSpan.textContent = 'XD';
            dataSpan.style.display = "";
            codePosition = 0;
        }
    } else {
        codePosition = 0;
    }
});

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
if (params.has('nobuttons')) {
    const headerToRemove = document.getElementById('buttons');
    if (headerToRemove) {
        headerToRemove.remove();
    }
}