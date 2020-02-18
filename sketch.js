const radius = 200;
let moon;
let img;
let vid
let theta = 0;


function setup() {
  createCanvas(710, 400, WEBGL);
  noStroke();
  fill(200);
  moon = loadModel('assets/moon.obj', true);
  img = loadImage('assets/download.jpg');
  vid = createVideo(['assets/torso.mov']);
  vid.loop();
  vid.hide();

}

function draw() {
  //noStroke();
  background(0);
  // const dirY = (mouseY / height - 0.5) * 8;
  // const dirX = (mouseX / width - 0.5) * 8;
  // directionalLight(204, 204, 204, dirX*2, dirY*2, .1);
  translate(0 * radius, 0, 0);
  rotateZ(theta * 1);
  rotateX(theta * 1.01);
  rotateY(theta * 1.01);
  texture(vid);
  model(moon, mouseX, mouseY);
    theta += 0.05;

}
