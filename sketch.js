var song;
var sliderVolume;
var sliderRate;
var sliderPan;
var button;
var jumpButton;
var amp;

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
  var diam = map(vol, 0, 0.3, 10, 200);
  fill(100, 15, 100);
  ellipse(300 / 2, 300 / 2, diam, diam);

  // sliders
  song.setVolume(sliderVolume.value());
  song.pan(sliderRate.value());
  song.rate(sliderPan.value());
}
