var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite( 50, 200, 50, 20 );
  bullet.shapeColor="white"
  
speed=random(223,321)
weight=random(30,52)
thickness = random(22,83)

wall=createSprite( 1200, 200, thickness , height/2 );
  wall.shapeColor="80,80,80"

}


function draw() {
  background("black"); 
  textSize(20);
  text("DAMAGE: "+ damage,500,50)
 
  

  bullet.velocityX=speed;

bullet.collide(wall);


function hasCollided(bullet,wall){
 bulletRightEdge = bullet.x + bullet.width;
 wallLeftEdge = wall.x;

if(bulletRightEdge>=wallLeftEdge){
return  true
}
return false;
}


if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
   damage= (0.5*weight*speed*speed)/(thickness*thickness*thickness)
}

  if(damage>10){
    wall.shapeColor="red"
  }
  
    if(damage<10){
      wall.shapeColor="green"
      }

  drawSprites();
}