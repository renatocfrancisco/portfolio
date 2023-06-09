const code = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];
let codePosition = 0;
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === code[codePosition]) {
        codePosition++;
        if (codePosition === code.length) {
            var dataSpan = document.getElementById("hm")
            dataSpan.textContent = atob("d2Vic2l0ZXMgbGlrZSB0aGlzIGFyZSBraW5kYSBsaWtlIGZ1dHVyZSB0b21ic3RvbmVzLiBiZSBuZWNlc3NhcnkuIGRvbid0IGJlIGEgcGxhY2Vob2xkZXIuIHJlZnVzZSB0byBiZSB3b3JzZS4gb3Bwb3NlIG9wcHJlc3Npb24uIHNoYXJlIHNvbmdzLiB0YWxrIGFib3V0IGl0LiB0aGluayBhYm91dCBpdC4=")
            dataSpan.style.display = "";
            codePosition = 0;
        }
    } else {
        codePosition = 0;
    }
});