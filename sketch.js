var bg,bgImg;
var player,playerJump;
var playButton;
var coin,coinImg;
var bgSound;
var log,logImg;
var pc_1,animate;

function preload(){
    bgImg = loadImage("bg3.jpg")
    bgSound = loadSound("bg-musicc.mp3")
    coinImg = loadAnimation("coin-1.png","coin-2.png","coin-3.png","coin-4.png","coin-5.png","coin-6.png")
    playerJump = loadAnimation("pc-jumping.png")
    logImg = loadImage("wood2.png")
}


function setup(){
    createCanvas(1200,500)

    bg = createSprite(600,250,1200,500)
    bg.scale = 4.0;
    bg.addImage(bgImg)

    player = new Player()

    bgSound.loop()
    
}

function draw() {

    if(keyDown("RIGHT_ARROW")){
        player.x = player.x+5
        bg.x = bg.x+20
    }

    if(keyDown("LEFT_ARROW")){
        player.x = player.x-5
        bg.x = bg.x-20
    }

    drawSprites()
    player.display()
   
}