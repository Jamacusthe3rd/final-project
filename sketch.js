
let slide = 1;

function setup() {
  createCanvas(1800, 900);
}

function preload() {
  img1 = loadImage('slide1.JPG')
  img2 = loadImage('slide2.JPG')
  img3 = loadImage('slide3.JPG')
  img4 = loadImage('slide4.JPG')
  img5 = loadImage('slide5.JPG')
  img6 = loadImage('slide6.JPG')
}

function draw() {
  background(220);
  console.log (slide)

  if (slide == 1){
    image(img1,0,0,1440,810)
  }
  if (slide == 2){
    image(img2,0,0,1440,810)
  }
  if (slide == 3){
    image(img3,0,0,1440,810)
  }
  if (slide == 4){
    image(img4,0,0,1440,810)
  }
  if (slide == 5){
    image(img5,0,0,1440,810)
  }
  if (slide == 6){
    image(img6,0,0,1440,810)
  }
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    if (slide > 1) {
      slide = slide - 1
    }
  }
  if (keyCode === RIGHT_ARROW){
    slide = slide + 1
  }
}

