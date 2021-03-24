var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1,carAnimation2,playerAnimation,logAnimation;

function preload()
{
 carAnimation1 = loadAnimation("images/car1.png");
 carAnimation2 = loadAnimation("images/car2.png");
 playerAnimation = loadAnimation("images/Player-03.png");
 logAnimation = loadAnimation("images/log2.png");
}
translate(0,-player.spt.y+height-150);
function setup()
 {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
 
   
 }

function draw() {
  background("skyblue");
 for(var i =0;i<6;i++)
 {
   var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
   bottomGrass1.shapeColor = "grey";
   if(i%2==0)
   {
     var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
     road.shapeColor = "black";
   }
   
 }
 for(var i=0;i<40;i++)
 {
   var cars = new Car(2);
   carGroup1.add(cars.spt);
 }
 for(var a = 0; a<50;a++)
 {
   var log = new Log(8);
logGroup1.add(log.spt);
 }
 for(var j=1;j<logGroup1.length;j++)
 {
  
   if(logGroup1[i].x<0)
   {
     logGroup1[i].x = width
   }
   
 }
 player = new Player(width/2,height-75);
 if(carGroup1.isTouching(player.spt))
 {
   player.spt.x = width/2;
   player.spt.y = height-75;
 }
 if(logGroup1.isTouching(player.spt))
 {
   player.spt.x = players.spt.x-3;
 }
 else if((player.spt.y>height-1550 && player.spt.x<1300) || (player.spt.y>height-850 && player.spt.x<500)|| (player.spt.y>height)|| (player.spt.x<0)|| (player.spt.x>width))
 {
   player.spt.x = width/2;
   player.spt.y = height-75;
 }
 drawSprites();
}
  
 function keyPressed()
 {
   if(keyCode == UP_ARROW)
   {
     player.move(0,-2);
   }
   else if(keyCode == DOWN_ARROW)
   {
     player.move(0,2);
   }
   else if(keyCode == LEFT_ARROW)
   {
     player.move(-2,0);
   }
   else if(keyCode == RIGHT_ARROW)
   {
     player.move(2,0);
   }

 }

  


