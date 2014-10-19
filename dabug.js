var streak = 0;
var time = 10;
var loop = "";

window.onload = function(){
  lineClickHandlers();
  init_game();
};

function init_game(){
  streak = 0;
  time = 10;
  loop = window.setInterval(gameloop, 1000);
  next_round();
}

function lineClickHandlers()
{
  var rows = document.getElementsByTagName("tr");
  for(var i = 0; i < rows.length; i++)
  {
    (function(i) {
      var thisRow = rows[i];

      thisRow.addEventListener('click', function(){
        checkAnswer(i+1);
      });
    })(i);
  }
}

function checkAnswer(rowNumber){
  console.log(rowNumber);
}

function gameloop(){
  time--;
  updateDOMTime(); // We redraw the time
  updateDOMStreak(); // We redraw the streak
  if(time===0){
    looseGame();
  }
}

function updateDOMTime(){
  var timediv = document.getElementById("whatdatime");
  timediv.innerHTML = "Time: " + time;
}

function updateDOMStreak(){
  var streakdiv = document.getElementById("whatdastreak");
  streakdiv.innerHTML = "Streak: " + streak;
}

function looseGame(){
  window.clearInterval(loop);
}

function next_round(){
  var codediv = document.getElementById("code");

  // var round = dummy_parse();

  // codediv.innerHTML = round.code;

}
