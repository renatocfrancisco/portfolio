var audio1 = new Audio(
  "assets\\COMTelph_Tone ringback tone 1 (ID 1614)_BSB.wav"
);

var audio2 = new Audio("assets\\COMTelph_Phone ring 5 (ID 0375)_BSB.wav");

var keyHandler = function (event, audio1) {
  // console.log(event.key);

  if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
    current = 0;
    return;
  }

  current++;

  if (pattern.length === current) {
    current = 0;
    window.alert("Dialing 911...");
    audio1.play();
  }
};

var pattern = ["9", "1", "1"];
var current = 0;

document.addEventListener("keydown", keyHandler, false);

setInterval(answer, 3000); // Set to 3 seconds
function answer(audio2) {
  alert("I am an alert message appear in every 3 seconds");
  audio2.play();
}
