var s1 = function(sketch) {
  var width = 300;
  var height = 300;
  var canvas1;
  var song;
  var sliderVolume;
  var sliderRate;
  var sliderPan;
  var button;
  var amp;
  var volHistory = [];

  sketch.setup = function() {
    canvas1 = sketch.createCanvas(width, height);
    sliderVolume = sketch.createSlider(0, 1, 0.5, 0.01);
    sliderRate = sketch.createSlider(0.5, 1, 0.75, 0.01);
    sliderPan = sketch.createSlider(-1, 1, 1, 0.01);
    song = sketch.loadSound('charlotte.mp3', loaded);
    amp = new p5.Amplitude();
  };

  //visualiser

  function loaded() {
    console.log('loaded');
    button = sketch.createButton('Play');
    button.mousePressed(togglePlaying);
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

  sketch.draw = function() {
    sketch.background(51);
    var vol = amp.getLevel();
    volHistory.push(vol);
    sketch.stroke(255);
    sketch.noFill();
    sketch.beginShape();
    for (var i = 0; i < volHistory.length; i++) {
      var y = sketch.map(volHistory[i], 0, 1, 300 / 2, 0);
      sketch.vertex(i, y);
    }
    sketch.endShape();

    if (volHistory.length > 300 - 50) {
      volHistory.splice(0, 1);
    }

    sketch.stroke(255, 0, 0);
    sketch.line(volHistory.length, 0, volHistory.length, 300);

    // sliders
    song.setVolume(sliderVolume.value());
    song.pan(sliderRate.value());
    song.rate(sliderPan.value());
  };
};

var myp1 = new p5(s1, 'visualiser');

//
// dots
//

var s2 = function(sketch) {
  var width = 300;
  var height = 300;
  var canvas1;
  var song;
  var sliderVolume;
  var sliderRate;
  var sliderPan;
  var button;
  var amp;
  var volHistory = [];

  sketch.setup = function() {
    canvas1 = sketch.createCanvas(width, height);
    sliderVolume = sketch.createSlider(0, 1, 0.5, 0.01);
    sliderRate = sketch.createSlider(0.5, 1, 0.75, 0.01);
    sliderPan = sketch.createSlider(-1, 1, 1, 0.01);
    song = sketch.loadSound('charlotte.mp3', loaded);
    amp = new p5.Amplitude();
  };

  function loaded() {
    console.log('loaded');
    button = sketch.createButton('Play');
    button.mousePressed(togglePlaying);
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

  sketch.draw = function() {
    sketch.background(51);
    var vol = amp.getLevel();
    var vol = amp.getLevel();
    var diam = sketch.map(vol, 0, 0.3, 10, 200);
    sketch.fill(100, 15, 100);
    sketch.ellipse(300 / 2, 300 / 2, diam, diam);

    // sliders
    song.setVolume(sliderVolume.value());
    song.pan(sliderRate.value());
    song.rate(sliderPan.value());
  };
};

var myp2 = new p5(s2, 'dots');

//
// muschroom
//

var s3 = function(sketch) {
  var width = 300;
  var height = 300;
  var canvas1;
  var song;
  var sliderVolume;
  var sliderRate;
  var sliderPan;
  var button;
  var amp;
  var volHistory = [];

  sketch.setup = function() {
    canvas1 = sketch.createCanvas(width, height);
    sliderVolume = sketch.createSlider(0, 1, 0.5, 0.01);
    sliderRate = sketch.createSlider(0.5, 1, 0.75, 0.01);
    sliderPan = sketch.createSlider(-1, 1, 1, 0.01);
    song = sketch.loadSound('charlotte.mp3', loaded);
    amp = new p5.Amplitude();
  };

  function loaded() {
    console.log('loaded');
    button = sketch.createButton('Play');
    button.mousePressed(togglePlaying);
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

  sketch.draw = function() {
    sketch.background(51);
    var vol = amp.getLevel();
    var diam = sketch.map(vol, 0, 0.3, 10, 50);
    // sketch.ellipse(300 / 2, 300 / 2, diam, diam);
    sketch.stroke(255);
    sketch.noFill();
    //mashroom
    sketch.beginShape((base = 180), (x = diam), (a = base + x), (b = base - x));
    sketch.arc(150, 100, a, b, sketch.PI, sketch.TWO_PI);
    //hat bottom
    sketch.vertex(150 - a / 2, 100);
    //leg
    sketch.vertex(130, 100);
    sketch.vertex(130, 180);
    sketch.vertex(130, a);
    //basement
    sketch.vertex(170, a);
    //leg - moving
    sketch.vertex(170, b);
    //leg
    sketch.vertex(170, 100);
    sketch.vertex(150 + a / 2, 100);
    sketch.endShape();

    //mashroom dots
    sketch.fill(diam, diam, diam);
    sketch.ellipse(90, 60, 20, 20);
    sketch.ellipse(130, 60, 20, 20);
    sketch.ellipse(210, 80, 30, 30);

    // sliders
    song.setVolume(sliderVolume.value());
    song.pan(sliderRate.value());
    song.rate(sliderPan.value());
  };
};

var myp3 = new p5(s3, 'maschroom');
