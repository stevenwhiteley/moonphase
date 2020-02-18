const radius = 200;
let moon;
let img;

function setup() {
  createCanvas(710, 400, WEBGL);
  noStroke();
  fill(200);
  moon = loadModel('assets/moon.obj', true);
  img = loadImage('assets/download.jpg');
}

function draw() {
  noStroke();
  background(0);
  const dirY = (mouseY / height - 0.5) * 4;
  const dirX = (mouseX / width - 0.5) * 4;
  directionalLight(204, 204, 204, dirX, dirY, 1);
  translate(-1.5 * radius, 0, 0);
  //sphere(radius);
  translate(3 * radius, 0, 0);
  texture(img);
  model(moon);
}
