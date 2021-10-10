function preload(){
bg=loadImage("bg.jpeg");
playei=loadAnimation("shooter_1.png")
zomb=loadImage("zombie.png")
hert=loadImage("heart_1.png")
playeii=loadAnimation("shooter_2.png")
}
function setup(){
createCanvas(windowWidth,windowHeight);
player=createSprite(200,height/2);
player.addAnimation("playei",playei)
player.scale=0.3
ZombieG=new Group()
BulletG=new Group()
heart1=createSprite(width-50,55)
heart1.addImage(hert)
heart1.scale=0.25

heart2=createSprite(width-100,55)
heart2.addImage(hert)
heart2.scale=0.25

heart3=createSprite(width-150,55)
heart3.addImage(hert)
heart3.scale=0.25

}
function draw(){

  background(bg);
  if(keyDown("UP_ARROW")){
    player.y=player.y-5
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+5
  }
  if(keyDown("SPACE")){
  bullet=createSprite(200,player.y-20,15,10)
  bullet.velocityX=+18
  BulletG.add(bullet);
  player.addAnimation("shooting",playeii)
  }
  zombiee()
  
  drawSprites();
  
}
function zombiee(){
if (frameCount % 60 === 0){
  zombie=createSprite(width,Math.round(random(100,height-100)))
zombie.addImage(zomb);
zombie.velocityX=-3
zombie.lifetime=500
ZombieG.add(zombie)
zombie.scale=0.15
}
}