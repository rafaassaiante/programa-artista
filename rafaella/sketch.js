function setup(){
  createCanvas(800, 800)
   background("rgba(0, 0, 0, 0.95)");
}

function draw() {
 
  fill("red");
  if(mouseIsPressed)
    rect(mouseX, mouseY, 20,35);
  stroke("black")
}