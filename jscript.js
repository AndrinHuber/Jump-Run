var gameDiv = document.getElementById("game");
var game3d = document.getElementById("game3d");
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
var gameoverbutton3d = document.getElementById("gameoverbutton3d");
var levelBar = document.getElementById("levelBar");
var levelBar3d = document.getElementById("levelbar3d");
var levelText = document.getElementById("levelText");
var percentagetext = document.getElementById("percentagetext");
var cloudholder = document.getElementById("cloudholder");
var settingbutton = document.getElementById("settingbutton");
var homebutton = document.getElementById("homebutton");
var hometab = document.getElementById("hometab");
var hometab3d = document.getElementById("hometab3d");
var settingstab = document.getElementById("settingstab");
var settingstab3d = document.getElementById("settingstab3d");
var skinGiraffelocked = document.getElementById("skinGiraffelocked");
var skinPinguinlocked = document.getElementById("skinPinguinlocked");
var skinBunnylocked = document.getElementById("skinBunnylocked");
var skinChickenlocked = document.getElementById("skinChickenlocked");
var lockedDiv = document.getElementsByClassName("lockedDiv");
var giraffeleveltext = document.getElementById("giraffeleveltext");
var pinguinleveltext = document.getElementById("pinguinleveltext");
var bunnyleveltext = document.getElementById("bunnyleveltext");
var chickenleveltext = document.getElementById("chickenleveltext");
var giraffenewSkin = document.getElementById("giraffenewSkin");
var pinguinnewSkin = document.getElementById("pinguinnewSkin");
var bunnynewSkin = document.getElementById("bunnynewSkin");
var chickennewSkin = document.getElementById("chickennewSkin");
var newSkinIsAvailable = document.getElementById("newSkinIsAvailable");
var giraffeskinDiv = document.getElementById("giraffeskinDiv");
var pinguinskinDiv = document.getElementById("pinguinskinDiv");
var bunnyskinDiv = document.getElementById("bunnyskinDiv");
var chickenskinDiv = document.getElementById("chickenskinDiv");
var languagetext = document.getElementById("languagetext");
var styletxt = document.getElementById("styletxt");
var darkMode = document.getElementById("darkMode");
var standartMode = document.getElementById("standartMode");
var lgbtqMode = document.getElementById("lgbtqMode");
var incompatibleDevice = document.getElementById("incompatibleDevice");
var incDevText = document.getElementById("incDevText");
var buttonDivSkins = document.getElementById("buttonDivSkins");
var buttonDivSettings = document.getElementById("buttonDivSettings");
var settingsbuttonIcon = document.getElementById("settingsbuttonIcon");
var skinbuttonIcon = document.getElementById("skinbuttonIcon");
var standartMode = document.getElementById("standartMode");
var darkMode = document.getElementById("darkMode");
var style1Mode = document.getElementById("style1Mode");
var style2Mode = document.getElementById("style2Mode");
var style3Mode = document.getElementById("style3Mode");
var style4Mode = document.getElementById("style4Mode");
var style5Mode = document.getElementById("style5Mode");
var deu = document.getElementById("deu");
var eng = document.getElementById("eng");
var fra = document.getElementById("fra");
var esp = document.getElementById("esp");
var che = document.getElementById("che");
var levelcounter = 0;
var counter = 0;
var velocity = 3;
var speed = 0.01;
var isRunning = new Boolean(false);
var isgameOver = false;

if (localStorage.getItem('levelBarMAX') == null || localStorage.getItem('levelBarMAX') == "") {
    localStorage.setItem('levelBarMAX', 10);
    levelBar.max = 10;
}
if (localStorage.getItem('level') == null || localStorage.getItem('level') == "" || localStorage.getItem('level') > 99999999) {
    localStorage.setItem('level', 0);
    levelText.innerHTML = "Level: " + localStorage.getItem('level');
}
if (localStorage.getItem('valueStorage') == null || localStorage.getItem('valueStorage') == "") {
    localStorage.setItem('valueStorage', 0);
}
if (localStorage.getItem('highscore') == null || localStorage.getItem('highscore') == "") {
    localStorage.setItem('highscore', 0);
}
if (localStorage.getItem('skin') == null || localStorage.getItem('skin') == "") {
    localStorage.setItem('skin', 'noskin');
}
if (localStorage.getItem('mode') == null || localStorage.getItem('mode') == "") {
    localStorage.setItem('mode', 'standartMode');
}

levelText.innerHTML = "Level: " + localStorage.getItem('level');
levelbarMax = localStorage.getItem('levelBarMAX');
levelBar.max = levelbarMax;
percentagetext.innerHTML = localStorage.getItem('valueStorage') + " / " + levelbarMax;
levelBar.value = localStorage.getItem('valueStorage');
settingstab.style.visibility = "hidden";
settingstab3d.style.visibility = "hidden";
hometab.style.visibility = "hidden";
hometab3d.style.visibility = "hidden";
block.style.animation = "none";
block2.style.animation = "none";
block.style.visibility = "hidden";
block2.style.visibility = "hidden";
cloudholder.style.cursor = "pointer";
grass.style.animationDuration = "0s";
grass2.style.animationDuration = "0s";
gameOver.style.visibility = "hidden";
gameOver3d.style.visibility = "hidden";
newSkinIsAvailable.style.display = "none";
giraffenewSkin.style.display = "none";
pinguinnewSkin.style.display = "none";
bunnynewSkin.style.display = "none";
chickennewSkin.style.display = "none";
var giraffelevel = 0;
var pinguinlevel = 2;
var bunnylevel = 5;
var chickenlevel = 7;
var C1;
var C2;
var C3;
var C4;
var C5;
var C6;
var C7;
pinguinleveltext.innerHTML = "Level: " + pinguinlevel;
giraffeleveltext.innerHTML = "Level: " + giraffelevel;
bunnyleveltext.innerHTML = "Level: " + bunnylevel;
chickenleveltext.innerHTML = "Level: " + chickenlevel;
var consoleTextVar;
var BannedMessageVar;
var BannedMessage1Var;
var BannedMessage2Var;
var newHighscoreTextVar;
var newLevelTextVar;
const today = new Date();
checkMode();
setLanguage();
checkSkin();
checkStatusSkins();
console.log(consoleTextVar);
checkifAdBlock();
//checkifBanned();


function checkStatusSkins(){
    checkifLocked('giraffe');
    checkifLocked('pinguin');
    checkifLocked('bunny');
    checkifLocked('chicken');
}

function checkifAdBlock(){
    if( document.getElementById('PR44EPxgRGrsoVe') ){
        console.log('AdBlock INACTIVE!');
      } else {
        console.log('AdBlocker ACTIVE!');
      }
}

function colorSet(name){
    localStorage.setItem('mode', name + 'Mode');
    checkMode();
}

function checkMode(){
    if(localStorage.getItem('mode') == 'standartMode'){
        C1 = "black";
        C2 = "#FED766";
        C3 = "lightgreen";
        C4 = "lightpink";
        C5 = "white";
        C6 = "lightskyblue";
        C7 = "#fe6666";
        setColors(standartMode);
    }
    if(localStorage.getItem('mode') == 'darkMode'){
        C1 = "white";
        C2 = "#404040";
        C3 = "#b3b3b3";
        C4 = "#121212";
        C5 = "black";
        C7 = "lightgrey";
        setColors(darkMode);
    }
    if(localStorage.getItem('mode') == 'style1Mode'){
        C1 = "black";
        C2 = "#DD5E98";
        C3 = "#7EA3CC";
        C4 = "#ED9B40";
        C5 = "white";
        C7 = "#04A777";
        setColors(style1Mode);
    }
    if(localStorage.getItem('mode') == 'style2Mode'){
        C1 = "black";
        C2 = "#C3D350";
        C3 = "#E6F14A";
        C4 = "#84A07C";
        C5 = "white";
        C7 = "#317B22";
        setColors(style2Mode);
    }
    if(localStorage.getItem('mode') == 'style3Mode'){
        C1 = "black";
        C2 = "#EE8434";
        C3 = "#717EC3";
        C4 = "#C95D63";
        C5 = "white";
        C7 = "#496DDB";
        setColors(style3Mode);
    }
    if(localStorage.getItem('mode') == 'style4Mode'){
        C1 = "black";
        C2 = "#F2BAC9";
        C3 = "#BAD7F2";
        C4 = "#BAF2E9";
        C5 = "white";
        C7 = "#B0F2B4";
        setColors(style4Mode);
    }
    if(localStorage.getItem('mode') == 'style5Mode'){
        C1 = "black";
        C2 = "#392F5A";
        C3 = "#EEC8E0";
        C4 = "#FFAFF0";
        C5 = "white";
        C7 = "#F092DD";
        setColors(style5Mode);
    }
}
function setColors(mode){
    checkStatusSkins()
    standartMode.style.borderColor = "black";
    darkMode.style.borderColor = "black";
    style1Mode.style.borderColor = "black";
    style2Mode.style.borderColor = "black";
    style3Mode.style.borderColor = "black";
    style4Mode.style.borderColor = "black";
    style5Mode.style.borderColor = "black";
    standartMode.style.transform = "scale(1.0)";
    darkMode.style.transform = "scale(1.0)";
    style1Mode.style.transform = "scale(1.0)";
    style2Mode.style.transform = "scale(1.0)";
    style3Mode.style.transform = "scale(1.0)";
    style4Mode.style.transform = "scale(1.0)";
    style5Mode.style.transform = "scale(1.0)";
    mode.style.borderColor = "white";
    mode.style.transform = "scale(1.1)";
    incDevText.style.color = C1;
    game3d.style.borderColor = C1;
    gameDiv.style.borderColor = C1;
    levelText.style.color = C1;
    levelBar3d.style.borderColor = C1;
    gameOver.style.borderColor = C1;
    gameOver3d.style.borderColor = C1;
    buttonDivSkins.style.borderColor = C1;
    buttonDivSettings.style.borderColor = C1;
    settingsbuttonIcon.style.color = C1;
    skinbuttonIcon.style.color = C1;
    settingstab3d.style.borderColor = C1;
    homebutton.style.borderColor = C1;
    hometab.style.borderColor = C1;
    settingstab.style.borderColor = C1;
    hometab3d.style.borderColor = C1;
    settingbutton.style.borderColor = C1;
    gameoverbutton3d.style.borderColor = C1;
    gameoverbutton.style.borderColor = C1;
    gameoverbutton.style.color = C1;
    game3d.style.backgroundColor = C2;
    hometab3d.style.backgroundColor = C2;
    levelBar3d.style.backgroundColor = C2;
    gameOver3d.style.backgroundColor = C2;
    settingstab3d.style.backgroundColor = C2;
    gameoverbutton3d.style.backgroundColor = C2;
    homebutton.style.backgroundColor = C3;
    settingbutton.style.backgroundColor = C3;
    gameoverbutton.style.backgroundColor = C3;
    document.body.style.backgroundColor = C4;
    incompatibleDevice.style.backgroundColor = C5;
    gameDiv.style.backgroundColor = C6;
    gameOver.style.backgroundColor = C7;
}

function checkifaSkinIsNew(){
    if(giraffenewSkin.style.display == "none" && pinguinnewSkin.style.display == "none" && bunnynewSkin.style.display == "none" 
    && chickennewSkin.style.display == "none"){
        newSkinIsAvailable.style.display = "none";
    }else{
        newSkinIsAvailable.style.display = "block";
    }
}

window.addEventListener('storage', function (e) {
    //changeMessage();
});

function checkifBanned() {
    if (localStorage.getItem('penalty') >= 2) {
        while (0 == 0) {
            alert(BannedMessageVar);
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
    alert(BannedMessage1Var);
  }else{
    localStorage.setItem('penalty', 2);
    alert(BannedMessage2Var);
    checkifBanned();
  }
}
*/
document.body.onkeydown = function (e) {
    switch (isgameOver) {
        case false:
            if (e.keyCode == 32 || e.keyCode == 38) {
                jumpfunction();
            }
            break;
        case true:
            if (e.keyCode == 13) {
                closeGameover();
            }
            break;
    }
}

function jumpfunction() {
    switch (true) {
        case (character.classList != "animate" && character.classList != "animate2"):
            jump();
            break;
        case (character.classList == "animate" && character.classList != "animate2"):
            doublejump();
            break;
    }
}

function jump() {
    if (isRunning == false && isgameOver == false) { start(); }
    character.classList.add("animate");
    setTimeout(function () {
        if (character.classList == "animate") {
            character.classList.remove("animate");
        }
    }, 700);
}

function doublejump() {
    character.classList.remove("animate");
    character.classList.add("animate2");
    setTimeout(function () {
        character.classList.remove("animate2");
    }, 700);
}

function checkSkin(){
    if(localStorage.getItem('skin') == 'noskin'){
        characterPic.src = "pictures/giraffe.png";
        localStorage.setItem('skin', 'giraffe');
    }
    characterPic.src = "pictures/" + localStorage.getItem('skin') + ".png";
}

var startAnimations = setInterval(function () {
    if (isRunning == true && isgameOver == false) {
        grass.style.animationDuration = "2.5s";
        grass2.style.animationDuration = "2.5s";
        characterPic.src = "pictures/" + localStorage.getItem('skin') + "-2.png";
        enemy1Pic.src = "pictures/Hund-2.png";
        enemy2Pic.src = "pictures/Tintenfisch-2.png";
        setTimeout(() => {
            if (isRunning == true && isgameOver == false) {
                characterPic.src = "pictures/" + localStorage.getItem('skin') + "-1.png";
                enemy1Pic.src = "pictures/Hund-1.png";
                enemy2Pic.src = "pictures/Tintenfisch-1.png";
            }
        }, 100);
        setTimeout(() => { }, 100);
    }
}, 200);

var makeFasterandRandom = setInterval(function () {
    if (velocity >= 1) {
        if (parseInt(window.getComputedStyle(block).getPropertyValue("left")) <= -20) {
            counter = counter + 1;
            counterHTML.innerHTML = counter;
            block.style.animation = "none";
            block.style.visibility = "hidden";
            setTimeout(() => {
                setTimeout(() => {
                    if (isRunning == true && isgameOver == false) {
                        block.style.visibility = "visible";
                        setAnimationNew(block);
                        velocity = velocity - speed;
                        block.style.animationDuration = velocity + "s";
                    }
                }, 100);
            }, Math.floor(Math.random() * 1000));
        }
        if (parseInt(window.getComputedStyle(block2).getPropertyValue("left")) <= -20) {
            counter = counter + 1;
            counterHTML.innerHTML = counter;
            block2.style.animation = "none";
            block2.style.visibility = "hidden";
            setTimeout(() => {
                setTimeout(() => {
                    if (isRunning == true && isgameOver == false) {
                        block2.style.visibility = "visible";
                        setAnimationNew(block2);
                        velocity = velocity - speed;
                        block2.style.animationDuration = velocity + "s";
                    }
                }, 100);
            }, Math.floor(Math.random() * 3000));
        }
    }
}, 50)

function setAnimationNew(blockType) {
    switch (blockType) {
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

function gameDivclick() {
    if (isRunning == true && isgameOver == false) {
        jumpfunction()
    }
    if (isRunning == false && isgameOver == false) {
        start();
    }
}

function settingsClick() {
    if(settingstab.style.visibility == "hidden" && isRunning == false){
        hometab.style.visibility = "hidden";
        hometab3d.style.visibility = "hidden";
        settingstab.style.visibility = "visible";
        settingstab3d.style.visibility = "visible";
    }else{
        settingstab.style.visibility = "hidden";
        settingstab3d.style.visibility = "hidden";
    }
}

function homeClick() {
    if(hometab.style.visibility == "hidden" && isRunning == false){
        settingstab.style.visibility = "hidden";
        settingstab3d.style.visibility = "hidden";
        hometab.style.visibility = "visible";
        hometab3d.style.visibility = "visible";
    }else{
        hometab.style.visibility = "hidden";
        hometab3d.style.visibility = "hidden";
    }
}

function start() {
    if (isRunning == false && isgameOver == false && settingstab.style.visibility == "hidden" && hometab.style.visibility == "hidden") {
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
        randomduration = ((Math.random() * 2) + 2.5) + "s";
        block.style.animationDuration = randomduration;
        block2.style.animationDuration = velocity + "s";
    }
}

function closeGameover() {
    isgameOver = false;
    gameoverbutton.style.transition = "none";
    gameOver.style.visibility = "hidden";
    gameOver3d.style.visibility = "hidden";
    startText.style.display = "block";
    cloudholder.style.cursor = "pointer";
    startText.style.visibility = 'visible';
    gameDiv.classList.add("startclick");
    characterPic.src = "pictures/" + localStorage.getItem('skin') + ".png";
    counter = 0;
    counterHTML.innerHTML = counter;
}

function checkifLocked(Skin){
    if(Skin == 'giraffe' && localStorage.getItem('level') >= giraffelevel){
        skinGiraffelocked.style.visibility = "hidden";
        if(characterPic.src.includes("giraffe") == true){
            giraffeskinDiv.style.backgroundColor = C4;
        }
    }
    if(Skin == 'pinguin' && localStorage.getItem('level') >= pinguinlevel){
        skinPinguinlocked.style.visibility = "hidden";
        if(characterPic.src.includes("pinguin") == true){
            pinguinskinDiv.style.backgroundColor = C4;
        }
    }
    if(Skin == 'bunny' && localStorage.getItem('level') >= bunnylevel){
        skinBunnylocked.style.visibility = "hidden";
        if(characterPic.src.includes("bunny") == true){
            bunnyskinDiv.style.backgroundColor = C4;
        }
    }
    if(Skin == 'chicken' && localStorage.getItem('level') >= chickenlevel){
        skinChickenlocked.style.visibility = "hidden";
        if(characterPic.src.includes("chicken") == true){
            chickenskinDiv.style.backgroundColor = C4;
        }
    }
}

function skincouldBeNew(){
    if((localStorage.getItem('level') - giraffelevel) == 0 && characterPic.src.includes("giraffe") == false){
        giraffenewSkin.style.display = "block";
    }else{
        giraffenewSkin.style.display = "none";
    }
    if((localStorage.getItem('level') - pinguinlevel) == 0 && characterPic.src.includes("pinguin") == false){
        pinguinnewSkin.style.display = "block";
    }else{
        pinguinnewSkin.style.display = "none";
    }
    if((localStorage.getItem('level') - bunnylevel) == 0 && characterPic.src.includes("bunny") == false){
        bunnynewSkin.style.display = "block";
    }else{
        bunnynewSkin.style.display = "none";
    }
    if((localStorage.getItem('level') - chickenlevel) == 0 && characterPic.src.includes("chicken") == false){
        chickennewSkin.style.display = "block";
    }else{
        chickennewSkin.style.display = "none";
    }
}

function setSkin(Skin) {
    localStorage.setItem('skin', Skin);
    removeNewText(Skin);
    characterPic.src = "pictures/" + localStorage.getItem('skin') + ".png";
}

function removeNewText(Skin){
    giraffeskinDiv.style.backgroundColor = "whitesmoke";
    pinguinskinDiv.style.backgroundColor = "whitesmoke";
    bunnyskinDiv.style.backgroundColor = "whitesmoke";
    chickenskinDiv.style.backgroundColor = "whitesmoke";
    if(Skin == 'giraffe'){
        giraffenewSkin.style.display = "none";
        giraffeskinDiv.style.backgroundColor = C4;
    } 
    if(Skin == 'pinguin'){
        pinguinnewSkin.style.display = "none";
        pinguinskinDiv.style.backgroundColor = C4;
    }
    if(Skin == 'bunny'){
        bunnynewSkin.style.display = "none";
        bunnyskinDiv.style.backgroundColor = C4;
    }
    if(Skin == 'chicken'){
        chickennewSkin.style.display = "none";
        chickenskinDiv.style.backgroundColor = C4;
    }
    checkifaSkinIsNew();
}

function levelbarCounter() {
    levelcounter++;
    momLevel = +localStorage.getItem('level') + +1;
    localStorage.setItem('level', momLevel);
    momMAX = Math.round(localStorage.getItem('levelBarMAX') * 1.25);
    localStorage.setItem('levelBarMAX', momMAX);
    levelBar.max = momMAX;
}

var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));

    if (blockLeft < 90 && blockLeft > 20 && characterTop >= 310 || block2Left < 90 && block2Left > 20 && characterTop >= 310) {
        isRunning = false;
        isgameOver = true;
        character.classList.remove("animate");
        cloudholder.style.cursor = "default";
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
        switch (true) {
            case (highscore < counter):
                localStorage.setItem('highscore', counter);
                Textscore.innerHTML = "Score: " + counter;
                Texthighscore.innerHTML = newHighscoreTextVar + localStorage.getItem("highscore");
                break;
            case (highscore >= counter):
                Textscore.innerHTML = "Score: " + counter;
                Texthighscore.innerHTML = "Highscore: " + localStorage.getItem("highscore");
                break;
        }
        newValue = +localStorage.getItem('valueStorage') + +counter;
        localStorage.setItem('valueStorage', newValue);
        switch (true) {
            case localStorage.getItem('valueStorage') == levelBar.max:
                localStorage.setItem('valueStorage', 0);
                newValue = 0;
                momLevel = +localStorage.getItem('level') + +1;
                levelbarCounter();
                skincouldBeNew();
                checkifaSkinIsNew();
                break;
            case localStorage.getItem('valueStorage') > levelBar.max:
                overlapingValue = localStorage.getItem('valueStorage') - levelBar.max;
                localStorage.setItem('valueStorage', overlapingValue);
                newValue = overlapingValue;
                levelbarCounter();
                skincouldBeNew();
                checkifaSkinIsNew();
                break;
        }
        while (localStorage.getItem('valueStorage') > levelBar.max) {
            overlapingValue = localStorage.getItem('valueStorage') - levelBar.max;
            localStorage.setItem('valueStorage', overlapingValue);
            newValue = overlapingValue;
            levelbarCounter();
            skincouldBeNew();
            checkifaSkinIsNew();
        }
        if (levelcounter > 0) {
            levelText.innerHTML = newLevelTextVar + localStorage.getItem('level');
            levelcounter = 0;
        } else {
            levelText.innerHTML = "Level: " + localStorage.getItem('level');
        }
        levelBar.value = newValue;
        percentagetext.innerHTML = levelBar.value + " / " + localStorage.getItem('levelBarMAX');
        checkStatusSkins();
        characterPic.src = "pictures/" + localStorage.getItem('skin') + ".png";
    }
}, 20);

function setLanguage(){
    var language = {
        eng : {
            starttext: 'To start the Game press:<br> [Click] | [Space] | [KeyUP]',
            gameoverbutton: 'Play',
            incDevText: 'Unfortunately, the game is incompatible with this device!<br>[minimum size: 400 x 650]',
            settings: 'Settings',
            newSkinText: 'New',
            languagetext: "Language",
            styletxt: "Style",
            consoleText: "Hello, I'm a console:) \nGood that you found me. In the console you can see error messages from the game.\nIs something wrong in the game? Do you need help? Then you can see the relevant information here!",
            BannedMessage: "You CANNOT PLAY this game anymore because you wanted to cheat!",
            BannedMessage1: "Please do NOT change the local storage! :( \n(Do you really need to do that?) \nAs a punishment, EVERYTHING will be reset the next time and you CANNOT play the game anymore! :)",
            BannedMessage2: "DO NOT change the local storage! :( \n (Do you really need to do that?) \n As a punishment, EVERYTHING will be reset the next time and you CANNOT play the game anymore! :)",
            newHighscoreText: "*NEW* Highscore: ",
            newLevelText: "*NEW* Level: "
        },
        deu: {
            starttext: 'Um das Spiel zu starten Drücke: <br> [Klick] | [Leertaste] | [KeyUP]',
            gameoverbutton: 'Weiter',
            incDevText: 'Das Spiel ist mit diesem Gerät leider inkompatibel!<br>[Minimum Grösse: 400 x 650]',
            settings: 'Einstellungen',
            newSkinText: 'Neu',
            languagetext: "Sprache",
            styletxt: "Aussehen",
            consoleText: "Hallo ich bin eine Konsole :)\nSchön, dass du mich gefunden hast. In der Konsole siehst du Fehlermeldungen vom Spiel.\nGeht etwas im Spiel nicht? Brauchst du Hilfe? Dann kannst du hier die entsprechenden Informationen sehen!",
            BannedMessage: "Du Kannst dieses Spiel NICHT MEHR SPIELEN, weil du betrügen wolltest!",
            BannedMessage1: "Bitte verändere den Local Storage NICHT! :( \n(Hast du das wirklich Nötig?) \n Zur Strafe wird dir beim nächsten mal ALLES Zurückgesetzt und du kannst das Spiel NICHT mehr spielen! :)",
            BannedMessage2: "Verändere den Local Storage NICHT! :( \n(Hast du das wirklich Nötig?) \n Zur Strafe wird jetzt alles Zurückgesetzt und das spielen UNMÖGLICH gemacht! :)",
            newHighscoreText: "*NEUER* Highscore: ",
            newLevelText: "*NEUES* Level: "
        },
        fra : {
            starttext: 'Pour démarrer le jeu, appuyez sur : <br> [Cliquez] | [Espace] | [KeyUP]',
            gameoverbutton: 'Jouer',
            incDevText: 'Malheureusement, le jeu est incompatible avec cet appareil !<br>[taille minimum : 400 x 650]',
            settings: 'Paramètres',
            newSkinText: 'Nouveau',
            languagetext: "Langue",
            styletxt: "Style",
            consoleText: "Bonjour, je suis une console :) \nBon que vous m'ayez trouvé. Dans la console, vous pouvez voir les messages d'erreur du jeu.\nQuelque chose ne va pas dans le jeu? As-tu besoin d'aide? Alors vous pouvez voir les informations pertinentes ici!",
            BannedMessage: "Vous NE POUVEZ PLUS JOUER à ce jeu parce que vous vouliez tricher !",
            BannedMessage1: "Veuillez NE PAS modifier le stockage local ! :( \n(Avez-vous vraiment besoin de ça?) \nEn guise de punition, TOUT sera réinitialisé la prochaine fois et vous NE POUVEZ PLUS jouer au jeu ! :)",
            BannedMessage2: "NE PAS modifier le stockage local ! :( \n(Avez-vous vraiment besoin de ça?) \nEn guise de punition, tout sera désormais réinitialisé et le jeu deviendra IMPOSSIBLE ! :)",
            newHighscoreText: "*NOUVEAU* Highscore: ",
            newLevelText: "*NOUVEAU* Level: "
        },
        esp : {
            starttext: 'Para iniciar el juego, presione: <br> [clic] | [Espacio] | [KeyUP]',
            gameoverbutton: 'tocar',
            incDevText: 'Desafortunadamente, el juego no es compatible con este dispositivo. <br> [Tamaño mínimo: 400 x 650]',
            settings: 'ajustes',
            newSkinText: 'Nuevo',
            languagetext: "lengua",
            styletxt: "apariencia",
            consoleText: "Hola, soy una consola :) \nBueno que me hayas encontrado. En la consola puedes ver mensajes de error del juego.\n¿Algo anda mal en el juego?  ¿Necesitas ayuda? ¡Entonces puedes ver la información relevante aquí!",
            BannedMessage: "¡NO PUEDES JUGAR más a este juego porque querías hacer trampa!",
            BannedMessage1: "¡NO cambie el almacenamiento local! :( \n(¿Realmente lo necesitas?) \n¡Como castigo, ahora todo se reiniciará y jugar será IMPOSIBLE! :)",
            BannedMessage2: "¡NO cambie el almacenamiento local! :( \n(¿Realmente lo necesitas?) \n¡Como castigo, ahora todo se reiniciará y jugar será IMPOSIBLE! :)",
            newHighscoreText: "*NUEVO* Highscore: ",
            newLevelText: "*NOUVEAU* Level: "
        },
        che : {
            starttext: "Ums Spiel z'starte druck: <br> [Klick] | [Leertaste] | [KeyUP]",
            gameoverbutton: 'Wiiter',
            incDevText: "s'Spiel isch mit dem Grät leider inkompatibel!<br>[Minimum Grössi: 400 x 650]",
            settings: 'Iistellige',
            newSkinText: 'Neu',
            languagetext: "Sproch",
            styletxt: "Ussehe",
            consoleText: "Hallo ich bin ä Konsolä:)\nSchön, dass du mich gefunde hesch. I dä Konsole gsesch du Fehlermeldungen vom Spiel.\nGoht öppis im Spiel nöd? Bruchsch Hilf? Denn chasch du do die entsprechende Informatione finde!",
            BannedMessage: "Du chasch das Spiel NÜME SPIELE, wel du hesch wölle schummle!",
            BannedMessage1: "Bitte verändere d'Local Storage NÖD! :( \n(Hesch du das würkli Nötig?) \n Zur Strof wird dir bim nächsten mal ALLES Zruckgsetzt und du chasch s'Spiel NÜM spiele! :)",
            BannedMessage2: "Verändere d'Local Storage NÖD! :( \n(Hesch du das würkli Nötig?) \n Zur Strof wird dir bim nächsten mal ALLES Zruckgsetzt und du chasch s'Spiel NÜM spiele! :)",
            newHighscoreText: "*NEUÄ* Highscore: ",
            newLevelText: "*NEUS* Level: "
        }
    };

    if(window.location.hash){
        if(window.location.hash == "#eng"){
            setSelectedLanguage(eng);
            setEnglish();
        }
        if(window.location.hash == "#deu"){
            setSelectedLanguage(deu);
            consoleTextVar = language.deu.consoleText;
            BannedMessageVar = language.deu.BannedMessage;
            BannedMessage1Var = language.deu.BannedMessage1;
            BannedMessage2Var = language.deu.BannedMessage2;
            newHighscoreTextVar = language.deu.newHighscoreText;
            newLevelTextVar = language.deu.newLevelText;
            starttext.innerHTML = language.deu.starttext;
            gameoverbutton.innerHTML = language.deu.gameoverbutton;
            incDevText.innerHTML = language.deu.incDevText;
            settings.innerHTML = language.deu.settings;
            styletxt.innerHTML = language.deu.styletxt;
            languagetext.innerHTML = language.deu.languagetext;
            elements=document.getElementsByClassName("newSkinText");
            for(var i = 0; i < elements.length; i++){
                elements[i].innerText=language.deu.newSkinText;
            }
        }
        if(window.location.hash == "#fra"){
            setSelectedLanguage(fra);
            consoleTextVar = language.fra.consoleText;
            BannedMessageVar = language.fra.BannedMessage;
            BannedMessage1Var = language.fra.BannedMessage1;
            BannedMessage2Var = language.fra.BannedMessage2;
            newHighscoreTextVar = language.fra.newHighscoreText;
            newLevelTextVar = language.fra.newLevelText;
            starttext.innerHTML = language.fra.starttext;
            gameoverbutton.innerHTML = language.fra.gameoverbutton;
            incDevText.innerHTML = language.fra.incDevText;
            settings.innerHTML = language.fra.settings;
            styletxt.innerHTML = language.fra.styletxt;
            languagetext.innerHTML = language.fra.languagetext;
            elements=document.getElementsByClassName("newSkinText");
            for(var i = 0; i < elements.length; i++){
                elements[i].innerText=language.fra.newSkinText;
            }
        }
        if(window.location.hash == "#esp"){
            setSelectedLanguage(esp);
            consoleTextVar = language.esp.consoleText;
            BannedMessageVar = language.esp.BannedMessage;
            BannedMessage1Var = language.esp.BannedMessage1;
            BannedMessage2Var = language.esp.BannedMessage2;
            newHighscoreTextVar = language.esp.newHighscoreText;
            newLevelTextVar = language.esp.newLevelText;
            starttext.innerHTML = language.esp.starttext;
            gameoverbutton.innerHTML = language.esp.gameoverbutton;
            incDevText.innerHTML = language.esp.incDevText;
            settings.innerHTML = language.esp.settings;
            styletxt.innerHTML = language.esp.styletxt;
            languagetext.innerHTML = language.esp.languagetext;
            elements=document.getElementsByClassName("newSkinText");
            for(var i = 0; i < elements.length; i++){
                elements[i].innerText=language.esp.newSkinText;
            }
        }
        if(window.location.hash == "#che"){
            setSelectedLanguage(che);
            consoleTextVar = language.che.consoleText;
            starttext.innerHTML = language.che.starttext;
            BannedMessageVar = language.che.BannedMessage;
            BannedMessage1Var = language.che.BannedMessage1;
            BannedMessage2Var = language.che.BannedMessage2;
            newHighscoreTextVar = language.che.newHighscoreText;
            newLevelTextVar = language.che.newLevelText;
            gameoverbutton.innerHTML = language.che.gameoverbutton;
            incDevText.innerHTML = language.che.incDevText;
            settings.innerHTML = language.che.settings;
            styletxt.innerHTML = language.che.styletxt;
            languagetext.innerHTML = language.che.languagetext;
            elements=document.getElementsByClassName("newSkinText");
            for(var i = 0; i < elements.length; i++){
                elements[i].innerText=language.che.newSkinText;
            }
        }
    }else{
        window.location.hash = "#eng";
        setSelectedLanguage(eng);
        setEnglish();
    }

    function setSelectedLanguage(lang){
        lang.style.backgroundColor = "black";
        lang.style.color = "white";
    }
    function setEnglish(){
        consoleTextVar = language.eng.consoleText;
        starttext.innerHTML = language.eng.starttext;
        BannedMessageVar = language.eng.BannedMessage;
        BannedMessage1Var = language.eng.BannedMessage1;
        BannedMessage2Var = language.eng.BannedMessage2;
        newHighscoreTextVar = language.eng.newHighscoreText;
        newLevelTextVar = language.eng.newLevelText;
        gameoverbutton.innerHTML = language.eng.gameoverbutton
        incDevText.innerHTML = language.eng.incDevText;
        settings.innerHTML = language.eng.settings;
        styletxt.innerHTML = language.eng.styletxt;
        languagetext.innerHTML = language.eng.languagetext;
        elements=document.getElementsByClassName("newSkinText");
        for(var i = 0; i < elements.length; i++){
            elements[i].innerText=language.eng.newSkinText;
        }
    }

    var dataReload = document.querySelectorAll("[data-reload]");

    for(i = 0; i <= dataReload.length; i++){
        if(dataReload[i] != undefined){
            dataReload[i].onclick = function(){
                setTimeout(function() {
                    location.reload();
                }, 100);
            }
        }
    }
}