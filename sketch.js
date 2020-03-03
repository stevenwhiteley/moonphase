const radius = 200;
let moon;
let img;
let vid
let theta = .5;
let goddess
let playing = false;


function setup() {
  createCanvas(1600, 1000, WEBGL);
  //noStroke();
  fill(200);
  moon = loadModel('assets/Moon.obj');
  goddess = loadModel('assets/12328_Statue_v1_L2.obj');
  img = loadImage('assets/download.jpg');
  vid = createVideo(['assets/lumenglitches.mp4']);
  vid.loop();
  vid.hide();
  button = createButton('play');
  button.mousePressed(toggleVid);

	background(0);
  stroke(0, 0, 0, 15);

function toggleVid() {
  if (playing) {
    vid.pause();
    button.html('play');
  } else {
    vid.loop();
    button.html('pause');
  }
  playing = !playing;
}

}

function draw() {

	randomChord();
  randomChord();

  push(); 
  noStroke();
  rotateX(theta*.02);
  rotateY(theta*.5);
  rotateZ(theta*.02);
  texture(vid);
  scale(.2);
    translate(2, 2, 2);
  model(moon);
     theta += .0001;
  pop(); 

push(); 
  noStroke();
  translate(2.2 * radius, 300, 5);
rotateX(11000);
rotateY(10050);
rotateZ(theta*.5);
  texture(vid);
  scale(3);
  model(goddess);
      theta += 0.05;
  pop(); 

  push(); 
    noStroke();
  translate(-2.2 * radius, 300, 5);
rotateX(11000);
rotateY(10050);
rotateZ(theta*.5);
  texture(vid);
  scale(3);
  model(goddess);
      theta += 0.05;
  pop(); 

}

function randomChord() {
  // find a random point on a circle
  push();
  let angle1 = random(0, 2 * PI);
  let xpos1 = -1500 + -1500 * cos(angle1);
  let ypos1 = -1500 + -1500 * sin(angle1);

  // find another random point on the circle
  let angle2 = random(0, 2 * PI);
  let xpos2 = 500 + -800 * cos(angle2);
  let ypos2 = 500 + -800 * sin(angle2);
  stroke(color(random(255), random(255), random(255)));
  // draw a line between them
  line(xpos1, ypos1, xpos2, ypos2);
  pop();
}