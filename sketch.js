var song;
var sliderVolume;
var sliderRate;
var sliderPan;
var button;
var jumpButton;
var amp;
var volHistory = [];

function setup() {
  createCanvas(300, 300);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0.5, 1, 0.75, 0.01);
  sliderPan = createSlider(-1, 1, 1, 0.01);
  song = loadSound('charlotte.mp3', loaded);
  amp = new p5.Amplitude();
}

function loaded() {
  console.log('loaded');
  button = createButton('Play');
  button.mousePressed(togglePlaying);
  jumpButton = createButton('Jump');
  jumpButton.mousePressed(jumpSong);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html('Pause');
  } else {
    song.pause();
    button.html('Play');
  }
}

function jumpSong() {
  var len = song.duration();
  var t = 0; // random(len);
  song.jump(t);
}

function draw() {
  background(51);
  var vol = amp.getLevel();
  volHistory.push(vol);
  stroke(255);
  noFill();
  beginShape();
  for (var i = 0; i < volHistory.length; i++) {
    var y = map(volHistory[i], 0, 1, 300 / 2, 0);
    vertex(i, y);
  }
  endShape();

  if (volHistory.length > 300 - 50) {
    volHistory.splice(0, 1);
  }

  stroke(255, 0, 0);
  line(volHistory.length, 0, volHistory.length, 300);

  // sliders
  song.setVolume(sliderVolume.value());
  song.pan(sliderRate.value());
  song.rate(sliderPan.value());
}
