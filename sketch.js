var fRect,mRect;

function setup() {
  createCanvas(800,400);

  mRect= createSprite(400, 200, 80, 30);
mRect.shapeColor = "green";
  fRect= createSprite(200, 200, 50, 80);
  fRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

mRect.x = World.mouseX;
mRect.y = World.mouseY;

if(mRect.x - fRect.x < (mRect.width/2 + fRect.width/2)&& 
  fRect.x - mRect.x < (mRect.width/2 + fRect.width/2)&& 
    fRect.y - mRect.y < (mRect.height/2 + fRect.height/2)&& 
     mRect.y - fRect.y < (mRect.height/2 + fRect.height/2) ){
  fRect.shapeColor = "red";
  mRect.shapeColor = "red";
}
else {
  fRect.shapeColor = "green";
  mRect.shapeColor = "green";
}
  drawSprites();
}