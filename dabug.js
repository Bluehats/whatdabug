var strikes = 0;
var time = 10;
var loop = "";

window.onload = function(){
  init_game();
}

function init_game(){
  strikes = 0;
  time = 10;
  loop = window.setInterval("gameloop()", 1000); 
  next_round(); 
}

function gameloop(){
  time--;
  updateTime(); // We redraw the time
  updateStrikes(); // We redraw the strikes
  if(time==0){
    looseGame();
  }
}

function updateTime(){
  var timediv = document.getElementById("whatdatime");
  timediv.innerHTML = "Time: " + time;
}

function updateStrikes(){
  var streakdiv = document.getElementById("whatdastreak");
  streakdiv.innerHTML = "Strikes: " + strikes;
}

function looseGame(){
  window.clearInterval(loop);
}

function next_round(){
  var codediv = document.getElementById("code");
  
  var round = dummy_parse();

  codediv.innerHTML = round.code;
  
}