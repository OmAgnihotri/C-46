
var boy, boyRun, bgImage;
var boundary1, boundary2, boundary3;

var edges;

var zombieGroup,logGroup,foodGroup;

var zombieImage;

var swordImage,healthImage,appleImage;

function preload() {
  boyRun = loadAnimation("images/tile0.png", "images/tile1.png", "images/tile2.png", "images/tile3.png", "images/tile4.png", "images/tile5.png");
  bgImage = loadImage("images/steps_mid.jpg");
zombieImage = loadAnimation("zombie/Run1.png","zombie/Run2.png","zombie/Run3.png","zombie/Run4.png","zombie/Run5.png","zombie/Run6.png",
"zombie/Run7.png","zombie/Run8.png","zombie/Run9.png","zombie/Run10.png");
swordImage =loadImage("sword.png");
healthImage =loadImage("health.png");
appleImage=loadImage("food.png");
}


function setup() {
  createCanvas(1200,550);
  boy = createSprite(200, 400, 20, 20);
  boy.addAnimation("running",boyRun);
  boy.rotateToDirection = true;
  boy.scale = 0.2;
  boy.rotation = 0;
  boy.mirrorX(1);
  boy.mirrorY(1);

  appleGroup=createGroup();
  zombieGroup=createGroup ();


  boundary1 = createSprite(150, 230, 300, 10);
  boundary1.visible = false;
  boundary2 = createSprite(410, 195, 220, 10);
  boundary2.rotation = -15;
  boundary2.visible = false;
  boundary3 = createSprite(670, 170, 300, 10);
  boundary3.visible = false;
  boundary4 = createSprite(1010, 170, 370, 10);
  boundary4.rotation = 5;
  boundary4.visible = false;

  edges = createEdgeSprites();
}

function draw() {
  imageMode(CENTER);
  image(bgImage, 600, 275, 1600, 550); 

  boy.collide(boundary1);
  boy.collide(boundary2);
  boy.collide(boundary3);
  boy.collide(boundary4);
  boy.collide(edges[0]);
  boy.collide(edges[1]);


  if (keyDown(LEFT_ARROW)) {
    boy.x = boy.x - 4;
    boy.rotation = 0;
    boy.mirrorX(-1);
   
  }
  if (keyDown(RIGHT_ARROW)) {
    boy.mirrorX(1);
    boy.rotation = 0;
    boy.x = boy.x + 4;
  }
  if (keyDown(UP_ARROW)) {
    if (boy.mirrorX() == -1)
      boy.rotation = 30
    else
      boy.rotation = -30;
    //boy.mirrorX(-1);
    boy.y = boy.y - 4;
  }
  if (keyDown(DOWN_ARROW)) {
    if (boy.mirrorX() == 1)
      boy.rotation = 10
    else
      boy.rotation = -10;
    //boy.mirrorY(1);
    boy.y = boy.y + 4;
  }
  


  spawnZombies();
  spawnApples();
  drawSprites();
}

function spawnZombies(){
  if(frameCount % 100 === 0){
  var zombie=createSprite(10,500);
  var direction=Math.round(random(1,2));
  if(direction===1){
    zombie.x=10;
 
  }
  else if(direction===2){
zombie.x=1100;

  }
  console.log(boy.x-zombie.x);
  console.log(boy.y-zombie.y);
  var zombiePositionX=Math.round((boy.x-zombie.x)/width)
  zombie.velocityX=zombiePositionX;
  var zombiePositionY=Math.round((boy.y-zombie.y)/height)
  zombie.velocityY=zombiePositionY;
  zombie.addAnimation("zombies",zombieImage);
  zombie.scale=0.1
  console.log(zombiePositionX);
  console.log(zombiePositionY);
  zombieGroup.add(zombie);

  }

  }
  function spawnApples (){
    if(frameCount % 180 === 0){
      var apples=createSprite(10,20);
      apples.addImage(appleImage);
      apples.scale=0.1;
      apples.x=Math.round(random(100,1000));
      apples.y=Math.round(random(100,500));
 apples.lifetime=200;
 appleGroup.add(apples);
 
 
    }
  }