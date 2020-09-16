var fixedRectangle, movingRectangle;

function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(200, 200, 50, 80);
  movingRectangle = createSprite(400, 200, 80, 30);

  fixedRectangle.shapeColor = "blue";
  movingRectangle.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;
  
  //console.log (movingRectangle.x - fixedRectangle.x);
  
  if (movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 &&
     fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 &&
     fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 &&
     movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 ){
 fixedRectangle.shapeColor = "green";
 movingRectangle.shapeColor = "green";
  }
  else{
    fixedRectangle.shapeColor = "pink";
    movingRectangle.shapeColor = "pink";
  } 

  drawSprites();
}