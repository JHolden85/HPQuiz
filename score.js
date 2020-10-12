var username = 0;
var gameScore = 0;
var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (gameScore > highscore) {
        localStorage.setItem("highscore", gameScore);      
    }
}
else{
    localStorage.setItem("highscore", highscore);
}

// document.getElementById("result").innerHTML = localStorage.getItem("username");