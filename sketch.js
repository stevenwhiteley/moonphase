const radius = 200;
let moon;
let moontexture;

function setup() {
  createCanvas(710, 400, WEBGL);
  noStroke();
  fill(200);
  moon = loadModel('assets/moon.obj', true);
  moontexture = loadImage('assets/moontexture.jpg', true);
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
  texture(moontexture);
  model(moon);
}
