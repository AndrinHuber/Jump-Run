var gameDiv = document.getElementById("game");
var character = document.getElementById("character");
var block = document.getElementById("block1");
var block2 = document.getElementById("block2");
var counterHTML = document.getElementById("counter");
var startText = document.getElementById("starttext");
var characterPic = document.getElementById("characterPic");
var enemy1Pic = document.getElementById("enemy1Pic");
var enemy2Pic = document.getElementById("enemy2Pic");
var grass = document.getElementById("grass");
var grass2 = document.getElementById("grass2");
var Textscore = document.getElementById("scoreText");
var Texthighscore = document.getElementById("highscoreText");
var gameOver = document.getElementById("gameOver");
var gameOver3d = document.getElementById("gameOver3d");
var gameoverbutton = document.getElementById("gameoverbutton");
var levelBar = document.getElementById("levelBar");
var levelText = document.getElementById("levelText");
var percentagetext = document.getElementById("percentagetext");
var counter = 0;
var velocity = 3;
var speed = 0.01;
var isRunning = new Boolean(false);
var isgameOver = false;

if(localStorage.getItem('levelBarMAX') == null || localStorage.getItem('levelBarMAX') == ""){
  localStorage.setItem('levelBarMAX', 10);
  levelBar.max = 10;
}
if(localStorage.getItem('level') == null || localStorage.getItem('level') == ""){
  localStorage.setItem('level', 0);
  levelText.innerHTML = "Level: " + localStorage.getItem('level');
}
if(localStorage.getItem('valueStorage') == null || localStorage.getItem('valueStorage') == ""){
  localStorage.setItem('valueStorage', 0);
}
if(localStorage.getItem('highscore') == null || localStorage.getItem('highscore') == ""){
  localStorage.setItem('highscore', 0);
} 

levelText.innerHTML = "Level: " + localStorage.getItem('level');
levelbarMax = localStorage.getItem('levelBarMAX');
levelBar.max = levelbarMax;
percentagetext.innerHTML = localStorage.getItem('valueStorage') + " / " + levelbarMax;
levelBar.value = localStorage.getItem('valueStorage');
block.style.animation = "none";
block2.style.animation = "none";
block.style.visibility = "hidden";
block2.style.visibility = "hidden";
gameDiv.style.cursor = "pointer";
grass.style.animationDuration = "0s";
grass2.style.animationDuration = "0s";
gameOver.style.visibility = "hidden";
gameOver3d.style.visibility = "hidden";
console.log("Hallo ich bin eine Konsole :)\nSchön hast du mich gefunden hast. In der Konsole siehst du Fehlermeldungen vom Spiel.\nGeht etwas im Spiel nicht? Brauchst du Hilfe? Dann kannst du hier die entsprechenden Informationen sehen!");
//checkifBanned();

window.addEventListener('storage', function(e) {
  //changeMessage();
});

function checkifBanned(){
  if(localStorage.getItem('penalty') >= 2){
    while(0 == 0) {
      alert("Du Kannst dieses Spiel NICHT MEHR SPIELEN, weil du betrügen wolltest!");
    }
  }
}
/*
function changeMessage(){
  localStorage.setItem('highscore', 0);

  if(localStorage.getItem('penalty') == null || localStorage.getItem('penalty') == ""){
    localStorage.setItem('penalty', 0);
  }
  if(localStorage.getItem('penalty') == 0){
    localStorage.setItem('penalty', 1);
    alert("Bitte verändere den Local Storage NICHT! :( \n(Hast du das wirklich Nötig?) \n Zur Strafe wird dir beim nächsten mal ALLES Zurückgesetzt und du kannst das Spiel NICHT mehr spielen! :)");
  }else{
    localStorage.setItem('penalty', 2);
    alert("Bitte verändere den Local Storage NICHT! :( \n(Hast du das wirklich Nötig?) \n Zur Strafe wird jetzt alles Zurückgesetzt und das spielen UNMÖGLICH gemacht! :)");
    checkifBanned();
  }
}
*/
document.body.onkeydown = function(e){
  switch(isgameOver){
    case false:
      if(e.keyCode == 32 || e.keyCode == 38){
        jumpfunction();
      }
      break;
    case true:
      if(e.keyCode == 13){
        closeGameover();
      }
      break; 
  }
}

function jumpfunction(){
  switch(true){
    case (character.classList != "animate" && character.classList != "animate2"):
      jump();
      break;
    case (character.classList == "animate" && character.classList != "animate2"):
      doublejump();
      break;
  }
}

function jump(){
  if(isRunning == false && isgameOver == false){ start(); }
  character.classList.add("animate");
  setTimeout(function(){
    if(character.classList == "animate"){
      character.classList.remove("animate");
    }  
  },700); 
}

function doublejump(){
  character.classList.remove("animate");
  character.classList.add("animate2");
  setTimeout(function(){
    character.classList.remove("animate2");
  },700);
}

var startAnimations = setInterval(function(){
  if(isRunning == true && isgameOver == false){
    grass.style.animationDuration = "2.5s";
    grass2.style.animationDuration = "2.5s";
    characterPic.src = "bilder/giraffe-2.png";
    enemy1Pic.src = "bilder/Hund-2.png";
    enemy2Pic.src = "bilder/Tintenfisch-2.png";
    setTimeout(() => {
      if(isRunning == true && isgameOver == false){
        characterPic.src = "bilder/giraffe-1.png";
        enemy1Pic.src = "bilder/Hund-1.png";
        enemy2Pic.src = "bilder/Tintenfisch-1.png";
      }
    }, 100);
    setTimeout(() => {
    }, 100);
  }
},200);

var makeFasterandRandom = setInterval(function(){
  if(velocity >= 1){
  if(parseInt(window.getComputedStyle(block).getPropertyValue("left"))<=-20){
      counter = counter + 1;
      counterHTML.innerHTML = counter;
    block.style.animation = "none";
    block.style.visibility = "hidden";
    setTimeout(() => {
      setTimeout(() => {
        if(isRunning == true && isgameOver == false){
          block.style.visibility = "visible";
          setAnimationNew(block);
          velocity = velocity - speed;
          block.style.animationDuration = velocity + "s";
        }
      }, 100);
    }, Math.floor(Math.random() * 1000));
  }
  if(parseInt(window.getComputedStyle(block2).getPropertyValue("left"))<=-20){
      counter = counter + 1;
      counterHTML.innerHTML = counter;
    block2.style.animation = "none";
    block2.style.visibility = "hidden";
    setTimeout(() => {
      setTimeout(() => {
        if(isRunning == true && isgameOver == false){
          block2.style.visibility = "visible";
          setAnimationNew(block2);
          velocity = velocity - speed;
          block2.style.animationDuration = velocity + "s";
        }
      }, 100);
    }, Math.floor(Math.random() * 3000));
  }
}
},50)

function setAnimationNew(blockType){
  switch(blockType){
    case block:
      blockType.style.animation = "block";
      break;
    case block2:
      blockType.style.animation = "block2";
      break;
  }
  blockType.style.animationIterationCount = "infinite";
  blockType.style.animationTimingFunction = "linear";
}

function gameDivclick(){
  if(isRunning == true && isgameOver == false){
    jumpfunction()
  }
  if(isRunning == false && isgameOver == false){
    start();
  }
}

function start(){
  if(isRunning == false && isgameOver == false){
    isRunning = true;
    grass.style.animationDuration = "2.5s";
    grass2.style.animationDuration = "2.5s";
    gameoverbutton.style.transition = ".1s";
    startText.style.visibility = "hidden";
    velocity = 3;
    block.style.visibility = "visible";
    block2.style.visibility = "visible";
    setAnimationNew(block);
    setAnimationNew(block2);
    randomduration = (Math.floor(Math.random() * 2)+2) + "s";
    block.style.animationDuration = randomduration;
    block2.style.animationDuration = velocity + "s";
  }
}

function closeGameover(){
  isgameOver = false;
  gameoverbutton.style.transition = "none";
  gameOver.style.visibility = "hidden";
  gameOver3d.style.visibility = "hidden";
  startText.style.display = "block";
  gameDiv.style.cursor = "pointer";
  startText.style.visibility='visible';
  gameDiv.classList.add("startclick");
  characterPic.src = "bilder/giraffe.png";
  counter = 0;
  counterHTML.innerHTML = counter;
}

var levelcounter = 0;
function levelbarCounter(){
  levelcounter++;
  momLevel = +localStorage.getItem('level') + +1;
  localStorage.setItem('level', momLevel);
  momMAX = localStorage.getItem('levelBarMAX') * 1.25;
  localStorage.setItem('levelBarMAX', momMAX);
  levelBar.max = momMAX;
}

var checkDead = setInterval(function(){
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));

  if(blockLeft<90 && blockLeft>20 && characterTop>=310 || block2Left<90 && block2Left>20 && characterTop>=310){
    isRunning = false;
    isgameOver = true;
    character.classList.remove("animate");
    gameDiv.style.cursor = "default";
    gameOver.style.visibility = "visible";
    gameOver3d.style.visibility = "visible";
    grass.style.animationDuration = "0s";
    grass2.style.animationDuration = "0s";
    block.style.visibility = "hidden";
    block2.style.visibility = "hidden";
    block.style.animation = "none";
    block2.style.animation = "none";
    //HIGHSCORE NACHRICHT
    var highscore = localStorage.getItem("highscore");
    switch(true){
      case (highscore < counter):
        localStorage.setItem('highscore', counter);
        Textscore.innerHTML = "Score: "+counter;
        Texthighscore.innerHTML = "*NEUER* Highscore: "+localStorage.getItem("highscore");
        break;
      case (highscore >= counter):
        Textscore.innerHTML = "Score: "+counter;
        Texthighscore.innerHTML = "Highscore: "+localStorage.getItem("highscore");
        break;
    }
    newValue = +localStorage.getItem('valueStorage') + +counter;
    localStorage.setItem('valueStorage', newValue);
    switch(true){
      case localStorage.getItem('valueStorage') == levelBar.max:
        localStorage.setItem('valueStorage', 0);
        newValue = 0;
        momLevel = +localStorage.getItem('level') + +1;
        levelbarCounter();
        break;
      case localStorage.getItem('valueStorage') > levelBar.max:
        overlapingValue = localStorage.getItem('valueStorage') - levelBar.max;
        localStorage.setItem('valueStorage', overlapingValue);
        newValue = overlapingValue;
        levelbarCounter();
        break;
    }
    while(localStorage.getItem('valueStorage') > levelBar.max){
      overlapingValue = localStorage.getItem('valueStorage') - levelBar.max;
      localStorage.setItem('valueStorage', overlapingValue);
      newValue = overlapingValue;
      levelbarCounter();
    }
    if(levelcounter > 0){
      levelText.innerHTML = "*NEUES* Level: " + localStorage.getItem('level');
      levelcounter = 0;
    }else{
      levelText.innerHTML = "Level: " + localStorage.getItem('level');
    }
    levelBar.value = newValue;
    percentagetext.innerHTML = levelBar.value + " / " + localStorage.getItem('levelBarMAX');
    characterPic.src = "bilder/giraffe.png";
  }
},20);