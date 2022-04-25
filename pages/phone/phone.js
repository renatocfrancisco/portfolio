// AUDIOS
var ringback = new Audio(
  "assets\\COMTelph_Tone ringback tone 1 (ID 1614)_BSB.wav"
);
ringback.volume = 0.7

var ring = new Audio("assets\\COMTelph_Phone ring 5 (ID 0375)_BSB.wav");
var answering_tone = new Audio(
  "assets\\COMTelph_Answering machine beep (ID 1616)_BSB.wav"
);

// Dial
var keyHandler = function (event) {
  // console.log(event.key);

  if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
    current = 0;
    return;
  }

  current++;

  if (pattern.length === current) {
    ringback.play();
    console.log("Playing Audio, i think...")
    setTimeout(pause_audio(), 5000);
  }
};

function pause_audio(){
  pause()
}

function pause(){
  ringback.pause();
}

var pattern = ["9", "1", "1"];
var current = 0;


document.addEventListener("keydown", keyHandler, false);