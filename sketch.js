var bg,bgimg
var ss,ss1
var alien,alien1,alien3,alien4,alien5,alien6
var laser
var alienGroup,laserGroup
var score = 0
var gameState = "play"

function preload(){
  bgimg = loadImage("assets/bg6.jpg")
  alien1 = loadImage("assets/alien1.png")
  alien3 = loadImage("assets/alien3.png")
  alien4 = loadImage("assets/alien4.png")
  alien5 = loadImage("assets/alien5.png")
  alien6 = loadImage("assets/alien6.png")
  ss1 = loadImage("assets/ss1.png")
}

function setup() {
  createCanvas(1200, 600);
  bg = createSprite(600,300,1200,600)
  bg.addImage(bgimg)
  ss = createSprite(100,300)
  ss.addImage(ss1)
  ss.scale = 0.3

  alienGroup = new Group()
  laserGroup = new Group()

}

function draw() {
  background(0);
  drawSprites();
  fill ("white")
  textSize(30)
  text("Score ="+score,900,50)
  if(gameState === "play"){
    if(keyDown(UP_ARROW)){
      ss.y-=5
    }
    if(keyDown(DOWN_ARROW)){
      ss.y+=5
    }
  }

}

