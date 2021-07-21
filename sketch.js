var playButtonImage;
var homepage, homepageImage;
var playButton = document.getElementById("playButton");
var gameState = "homepage";
var image;
var button;

function preload() {
  playButtonImage = loadImage("play_button.png");
  homepageImage = loadImage("homepage.png");
}

function setup() {
  createCanvas(1200,800);
}

function draw() {
  background(255,255,255); 

  if (gameState === "homepage") {
    playButton.style.opacity = 0;
    homepage = createSprite(600, 400, 1200, 800);
    homepage.addImage(homepageImage);
    drawSprites();

    playButton.onclick = function() {
      playButton.remove();
      gameState = "play";
    }

  }

  if (gameState === "play") {
    textSize(30);
    text("Work In Progress", 200, 200);
  }

}
