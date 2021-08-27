var bg;
var detective,detectiveImg;
var water1,water2,water3,water4,water5;
var thorn,key,head;
var headImg,head1,head2,head3;
var b1;
var openTreasureImg,openTreasure;
var gameState = "intro";
var titleIMG,title;
var b1,b2;
var textIMG,textS,text2,text2IMG;




function preload(){
  bg = loadImage("intro.jpg");
  detectiveImg = loadImage("th.png")
  openTreasureImg = loadImage("openTreasure.png");
  titleIMG = loadImage("Duengeon Master.png");
  headImg = loadImage("head.jpg");
  textIMG = loadImage("button.png");
  text2IMG = loadImage("text.png");
}
function setup() {
  createCanvas(1000,800);

   b1 = createImg("button.png");
   b1.position(510,450);
   b1.size(60,60);
   b1.mouseClicked(level1);

  title = createSprite(500,100);
  title.addImage(titleIMG);
  title.scale = 1.2;

   detective = createSprite(680,115,50,50);
   detective.addImage(detectiveImg);
   detective.scale = 0.1;

   textS = createSprite(500,540,20,20);
   textS.addImage(text2IMG);
   textS.scale = 1.5;
}
function draw() {
  background(bg); 
  //console.log(detective.x+","+detective.y)
  
  if(keyDown("UP_ARROW")){
    detective.y = detective.y - 5;
  } 

  if(keyDown("DOWN_ARROW")){
    detective.y = detective.y + 5;
  } 

  if(keyDown("RIGHT_ARROW")){
    detective.x = detective.x + 5;
  } 
  
  if(keyDown("LEFT_ARROW")){
    detective.x = detective.x - 5;
  } 

 
  
  drawSprites();
}

function level1(){
  bg = loadImage("level1.jpg");

  title.visible = false;
  b1.position(0,0);
  b1.size (0,0);
  textS.visible = false;
  
    b1  =createSprite(525,250,15,75);
    //b1.visible = false;

    b2  =createSprite(420,300,245,15);
    //b2.visible = false;

    b3  =createSprite(303,475,15,345);
    //b3.visible = false;
    
    b4  =createSprite(375 ,650,175,15);
    //b4.visible = false;

    b5 = createSprite(402,110,15,215);

   //cretespritek rona

  thorn = createSprite(267,542,65,65);
  thorn.visible = false;
  
  key = createSprite(440,40,50,50)
  key.visible = false;
  key.depth = detective.depth;

  head = createSprite(735,610,50,50)
  head.visible = false;

  openTreasure = createSprite(104,585,50,50);
  openTreasure.visible = false;
  openTreasure.addImage(openTreasureImg);
  openTreasure.scale = 0.13

   head1 = createSprite(850,680,20,20);
   head1.addImage(headImg);
   head1.scale = 1;
   head1.depth = detective.depth;
  detective.depth++

   head2 = createSprite(445,180,20,20);
   head2.addImage(headImg);
   head2.scale = 1;
   head2.depth = detective.depth;
   detective.depth++

   head3 = createSprite(150,690,20,20);
   head3.addImage(headImg);
   head3.scale = 1;
   head2.depth = detective.depth;
   detective.depth++
  
   /*if(detective.x <= 450 && detective.y <= 50){
    openTreasure = createSprite(104,585,50,50);
    //openTreasure.visible = false;
    openTreasure.addImage(openTreasureImg);
    openTreasure.scale = 0.13
  }*/

    // if(detective.isTouching(key)){
    // openTreasure.visible = true;
    // }

    if(detective.isTouching(head1)){
      gameOver();
    }
}

function level2(){

  bg = loadImage("l2.jpg");

} 

function gameOver(){
  detective.destroy();
 
  bg = loadImage("GM.png");
} 






