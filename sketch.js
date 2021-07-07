var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf; 

function preload(){

  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX

  create_apples()

  create_leaves()

  drawSprites();
}

function create_leaves() {
  if (frameCount % 80 == 0) {
  leaf = createSprite(600, 300, 40, 10)
  leaf.addImage(leafImg)
  leaf.x = Math.round(random(0, 400))
  leaf.y = Math.round(random(50))
  leaf.scale = 0.1
  leaf.velocityY = 3
  leaf.lifetime = 100
  leaf.depth = rabbit.depth - 1
  }
}

//The frameCount is 120 to delay the falling of the leaves (and not allow it to fall at the same time as the apple)

function create_apples() {
  if (frameCount % 120 == 0) {
  apple = createSprite(600, 300, 40, 10)
  apple.addImage(appleImg)
  apple.x = Math.round(random(0, 400))
  apple.y = Math.round(random(50))
  apple.scale = 0.1
  apple.velocityY = 3
  apple.lifetime = 100
  apple.depth = rabbit.depth - 1
  }
}