const radius = 200;
let moon;
let img;
let vid
let theta = 0;


function setup() {
  createCanvas(1000, 900, WEBGL);
  noStroke();
  fill(200);
  moon = loadModel('assets/moon.obj', true);
  img = loadImage('assets/download.jpg');
  vid = createVideo(['assets/lumenglitches.mp4']);
  vid.loop();
  vid.hide();

}

function draw() {
  //noStroke();
  background(255);
  // const dirY = (mouseY / height - 0.5) * 8;
  // const dirX = (mouseX / width - 0.5) * 8;
  // directionalLight(204, 204, 204, dirX*2, dirY*2, .1);
  translate(0 * radius, 0, 5);
  rotateZ(theta * 1);
  rotateX(theta * 1.01);
  rotateY(theta * 1.01);
  texture(vid);
  scale(3);
  model(moon);

    theta += 0.05;

}
