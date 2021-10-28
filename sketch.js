var bg,bg2,form,system,code,security;
var score=0;
var music
var music1
var button10;

function preload() {
  bg = loadImage("cave.jpeg");
  bg2 = loadImage("treasure1.jpg")
music= loadSound("backgroundmusic.mp3");
music1= loadSound("Tada.mp3");

}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

  music.play();

}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  fill("red");
  textSize(30);
  text("Treasure Hunt", 400, 200);

  fill("white");
  textSize(45);
  text("Press SPACE To MUTE", 260, 400);

  fill("white");
  textSize(25);
  text("Press Enter to Show Answer",350,350)

  if(keyCode === 32){
    music.stop();
  }

  if(score === 3) {
    clear()
    background(bg2);
    fill("red")
    textSize(70);
    strokeWeight(10);
    text("TREASURE UNLOCKED",150, 250);
    music.stop();
   
  }

 if(keyCode === 13){
    textSize(40)
    fill(255);
    text("1.Variable   2.Database   3.Function",220,480)
}

  drawSprites();

}
