// ball variables
let xBall = 300;
let yBall = 200;
let diameter = 16;
let lightning = diameter / 2;

// ball speed
let speedXBall = 6;
let speedYBall = 6;

// racket variables
let xRacket = 5;
let yRacket = 150;
let heightRacket = 90;
let widthRacket = 10;

// opponent's variables - computer
let xRacketComputer = 585;
let yRacketComputer = 150;
let speedYComputer;

// chance to miss
let chanceToMiss = 0;

// game score
let myPoints = 0;
let pointsComputer = 0;

// sounds
let racket;
let points;
let trail;

function preload() {
  trail = loadSound("trilha.mp3");
  points = loadSound("ponto.mp3");
  racket = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trail.loop();
}

function draw() {
  background(0);
  showMeBall();
  moveBall();
  checksCollisionEdge();
  showMeRacket(xRacket, yRacket);
  moveRacket();
  checkCollisionMyRacket();
  showMeRacket(xRacketComputer, yRacketComputer);
  moveRacketComputer();
  checkCollisionRacketComputer();
  includeScoreBoard();
  scorePoint();
}

function showMeBall() {
  circle(xBall, yBall, diameter);
}

function moveBall() {
  xBall += speedXBall;
  yBall += speedYBall;  
}

function checksCollisionEdge() {
  if (xBall + lightning > width || xBall - lightning < 0) {
      speedXBall *= -1;
  }
  
  if (yBall + lightning > height || yBall - lightning < 0) {
    speedYBall *= -1;
  }
}

function showMeRacket(x, y) {
  rect(x, y, widthRacket, heightRacket);
}

function moveRacket() {
  
  if (keyIsDown(UP_ARROW)) {
    yRacket -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRacket += 10;
  }
}

function checkCollisionMyRacket() {
  
  if( xBall - lightning < xRacket + widthRacket && yBall - lightning < yRacket + heightRacket && yBall + lightning > yRacket) {
    speedXBall *= -1;
    racket.play();
  }
}

function checkCollisionRacketComputer() {
  
  if( xBall + lightning > xRacketComputer && yBall + lightning < yRacketComputer + heightRacket && yBall + lightning > yRacketComputer) {
    speedXBall *= -1;
    racket.play();
  }
}

function calculateChanceOfMakingAMistake() {
  if (pointsComputer >= myPoints) {
    chanceToMiss += 1
    if (chanceToMiss >= 39){
    chanceToMiss = 40
    }
  } else {
    chanceToMiss -= 1
    if (chanceToMiss <= 35){
    chanceToMiss = 35
    }
  }
}

function moveRacketComputer() {
  speedYComputer = yBall - yRacketComputer - widthRacket / 2 - 30;
  yRacketComputer += speedYComputer + chanceToMiss;
  calculateChanceOfMakingAMistake();
}

function includeScoreBoard() {
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(139, 0, 139));
  rect(150, 10, 40, 20);
  fill(255);
  text(myPoints, 170, 26);
  fill(color(139, 0, 139));
  rect(450, 10, 40, 20);
  fill(255);
  text(pointsComputer, 470, 26);
}

function scorePoint() {
  if (xBall > 590) {
    myPoints += 1;
    points.play();
  }
  
  if (xBall < 10) {
    pointsComputer += 1;
    points.play();
  }
}