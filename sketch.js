//import processing.sound.*;
let song;
let song1;
let song2;
let song3;
var et;
var opacity = 0;
var img;
var txt;
var trc;
var overButton = false;

var myboolean = (backwards = false);
let timeLapse = 400;
let timeTrack;
let m;
//botoes
let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
var link;
//let print;

function setup() {
  createCanvas(600, 600);
  song = loadSound('hit.wav');
  song1 = loadSound('pulse.wav');
  song2 = loadSound('radar.wav');
  song3 = loadSound('lucid.wav');
  
  
  /*
 song = loadSound(this, "fabFX.mp3");
    soundfile1 = new SoundFile(this, "hit.wav");
    soundfile2 = new SoundFile(this, "lucid.wav");
    soundfile3 = new SoundFile(this, "pulse.wav");
*/
  // soundfile = new SoundFile(this, "fabFX.mp3");
  // soundfile.loop();

  //images
  trc = loadImage("Trance3.png");
  txt = loadImage("TextoTecFXpng.png");
  et = loadImage("etFXpng.png"); // Load the image into the program
  et.resize(258, 458);
}

function draw() {
  background(0); // total canva black

  
  
  
  
  
  
  // rect flahing/blinking
  let m = millis();
  fill(m % 200); // velocity of flashs ** not working good ** maybe my computer..
  rect(25, 25, 555, 555, 30);
  //image(et, 130, 125 );
  // image(txt, 50, 40);

  //rgb
  tint(20, 17, 247, 100); // Alpha to 102 without changing the tint
  image(et, 140, 125);
  tint(255, 0, 0, 80); // Tint to yellow, alpha to 153
  image(et, 120, 125);

  //opacity
  if (opacity < 255) {
    // When less than the maximum,
    opacity += 0.5; // increase opacity
  }
  tint(255, opacity);
  image(et, 130, 125);
  image(txt, 50, 40);
  image(trc, 85, 130);

  //buttons draws
  fill(value1);
  rect(500, 200, 50, 50, 20);
  fill(value2);
  rect(500, 300, 50, 50, 20);
  fill(value3);
  rect(500, 400, 50, 50, 20);
  fill(value4);
  rect(500, 500, 50, 50, 20);

  //ciercle flow with mouse
  noFill();
  stroke(255);
  ellipse(mouseX, mouseY - 55, 200, 200);

  //button link to web page
  if (overButton == true) {
    let m4 = millis();
    fill(m4 % 150);
    circle(290, 250, 30);
    cursor(CROSS);
  } else {
    noStroke();
    noFill();
    cursor(HAND);
  }
}

//circle(260, 230, 30);

function mouseReleased() {
  loop();

  if (mouseX >= 500 && mouseX <= 550 && (mouseY >= 200) & (mouseY <= 230)) {
    
    song.play();
    
    if (value1 == 255) {
      value1 = 0;
    } else {
      value1 = 255;
    }
    //print("btn1 hit.");
  }

  if (mouseX >= 500 && mouseX <= 550 && (mouseY >= 300) & (mouseY <= 330)) {
   song1.play();
    
    if (value2 == 255) {
      value2 = 0;
    } else {
      value2 = 255;
        
    }
  
    // print("btn2 hit.");
  }

  if (mouseX >= 500 && mouseX <= 550 && (mouseY >= 400) & (mouseY <= 430)) {
    song2.play();
    
    if (value3 == 255) {
      value3 = 0;
    } else {
      value3 = 255;
    }
    //print("btn3 hit.");
  }

  if (mouseX >= 500 && mouseX <= 550 && (mouseY >= 500) & (mouseY <= 530)) {
    song3.play();
    
    if (value4 == 255) {
      value4 = 0;
    } else {
      value4 = 255;
    }
    //print("btn4 hit.");
  }
}
function mousePressed() {
  if (overButton) {
    // link("https://www.youtube.com/playlist?list=PL087855B0290C2154");
    //link("https://www.youtube.com/playlist?list=PLLfjXK0h5ZJK3aWfOtz0-wEpL6fkvZiBB");

    window.location.replace("https://www.youtube.com/playlist?list=PL087855B0290C2154");
  }
}

function mouseMoved() {
  checkButtons();
}

function mouseDragged() {
  checkButtons();
}

function checkButtons() {
  if (mouseX > 200 && mouseX - 40 < 300 && mouseY + 35 > 200 && mouseY < 300) {
    overButton = true;
  } else {
    overButton = false;
  }
}
