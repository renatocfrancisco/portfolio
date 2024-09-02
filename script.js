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
      var dataSpan = document.getElementById("hm");
      dataSpan.textContent =
        "websites like this are kinda like future tombstones. be necessary. don't be a placeholder. refuse to be worse. oppose oppression. share songs. talk about it. think about it.";
      dataSpan.style.display = "";
      codePosition = 0;
    }
  } else {
    codePosition = 0;
  }
});

document.getElementById("bsky").addEventListener("mouseover", function () {
  document.getElementById("bsky").src = "assets/simpleicons/bluesky.svg";
});

document.getElementById("bsky").addEventListener("mouseout", function () {
  document.getElementById("bsky").src = "assets/simpleicons/twitter.svg";
});
