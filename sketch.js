var runner,runner_running;
var path;

function preload(){
  //pre-load images
  runner= loadAnimation ("runner-1.png","runner-2.png");
  pathImage= loadImage ("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner=createSprite (10,160,20,30);
  runner.addAnimation ("running",runner)
  runner.scale=1


}

function draw() {
  background(0);

  //Moving Background 
  path.createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  //code to reset the background
  //path.createSprite(200,200);
   path=createSprite(200,200);
   
}
 
   drawSprites();
  if(path.y > 400) {
    path.y = height/2 }



