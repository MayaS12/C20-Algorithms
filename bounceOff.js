var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  //fixedRect = createSprite(400, 100, 50, 80);
//movingRect = createSprite(400,600,80,30);
fixedRect = createSprite(200, 200, 50, 80);
movingRect = createSprite(600,200,80,30);

movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";

//fixedRect.velocityY = 5;
//movingRect.velocityY = -5;

fixedRect.velocityX = 5;
movingRect.velocityX = -5;

movingRect.debug = true;
fixedRect.debug = true;

}

function draw() {
  background(0);

 // movingRect.x = mouseX;
//movingRect.y = mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 )
{
movingRect.velocityX = movingRect.velocityX*-1;
fixedRect.velocityX = fixedRect.velocityX*-1;
 
    //movingRect.shapeColor ="red";
  //fixedRect.shapeColor = "red";
}

if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + fixedRect.height/2)
{
    movingRect.velocityY = movingRect.velocityY*-1;
    fixedRect.velocityY = fixedRect.velocityY*-1;
}

  drawSprites();
}