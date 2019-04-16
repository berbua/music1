var song;
var sliderVolume;
var sliderRate;
var sliderPan;
var button;
var jumpButton;

function setup() {
  createCanvas(300, 300);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0.5, 1, 0.75, 0.01);
  sliderPan = createSlider(-1, 1, 1, 0.01);
  song = loadSound('charlotte.mp3', loaded);
  button = createButton('Play');
  button.mousePressed(togglePlaying);
  jumpButton = createButton('Jump');
  jumpButton.mousePressed(jumpSong);
  song.addCue(3, changeBackground);
}

function changeBackground() {
  background(random(255), random(255), random(255));
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
  console.log(t);
}

function loaded() {
  console.log('loaded');
}

function draw() {
  // background(0);
  song.setVolume(sliderVolume.value());
  song.pan(sliderRate.value());
  song.rate(sliderPan.value());

  // if (song.currentTime() > 5) {
  //   background(255, 0, 255);
  // }

  //background(song.currentTime() * 10, 0, 255);
}

//preload

// var song;
// var slider;

// function preload() {
//   song = loadSound('traveller.mp3');
// }

// function setup() {
//   createCanvas(400, 400);
//   slider = createSlider(0, 1, 0.5, 0.01);
//   song.play();
// }

// function draw() {
//   background(0);
//   song.setVolume(slider.value());
// }
