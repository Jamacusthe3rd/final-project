let img;
let buzz;
let x_pos;
let y_pos;
let x_vel = 0
let y_vel = 0
let max_speed = 3
let clicked = false

function preload() {
  img = loadImage('bee.jpg')
  buzz = loadSound('buzz.wav')
  x_pos = windowWidth/2
  y_pos = windowHeight/2
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
}



function draw() {
  background(255);

  let x_move_change = random(-1,1)
  let y_move_change = random(-1,1)
  
  x_vel += x_move_change
  y_vel += y_move_change

  //limit on speed
  if (x_vel > max_speed) {
    x_vel = max_speed
  }
  if (x_vel < -max_speed) {
    x_vel = -max_speed
  }
  if (y_vel > max_speed) {
    y_vel = max_speed
  }
  if (y_vel < -max_speed) {
    y_vel = -max_speed
  }
  
  x_pos = x_pos + x_vel
  y_pos = y_pos + y_vel
  
  //keeps bee in window
  if (x_pos < 50) {
    x_pos = 50
  }
  if (y_pos < 50) {
    y_pos = 50
  }
  if (x_pos > windowWidth-50) {
    x_pos = windowWidth-50
  }
  if (y_pos > windowHeight-50) {
    y_pos = windowHeight-50
  }

  image(img,x_pos,y_pos,100,100)
  //sound becomes louder depending on distance from bee
  distance = 1-(dist(x_pos,y_pos,mouseX,mouseY)/1000)
  if (distance < 0){
    distance = 0 
  }
  buzz.amp(distance)
  console.log(distance)
}

function mousePressed() {
  if (clicked == false) {
    buzz.loop()
    clicked = true
  }
}