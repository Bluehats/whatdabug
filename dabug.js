var streak = 0;
var time = 10;
var loop = "";
var currentBug;
var rounds;

window.onload = function(){
  init_game();
};

function init_game(){
  streak = 0;
  time = 10;
  loop = window.setInterval(gameloop, 1000);
}

function lineClickHandlers()
{
  var rows = document.getElementsByTagName("tr");
  for(var i = 0; i < rows.length; i++)
  {
    (function(i) {
      var thisRow = rows[i];
      thisRow.setAttribute("ontouched", "this.onclick=fix");
      thisRow.addEventListener('click', function(){
        checkAnswer(i+1);
      });
    })(i);
  }
}

function fix()
{
    var el = this;
    var par = el.parentNode;
    var next = el.nextSibling;
    par.removeChild(el);
    setTimeout(function() {par.insertBefore(el, next);}, 0)
}

function checkAnswer(rowNumber){
  bugLines = currentBug.get('bug_lines').split(',');
  var rows = document.getElementsByTagName("tr");
  if (bugLines.indexOf(rowNumber + '') >= 0 ) {
    next_round();
    time += 10;
    streak += 1;
    updateDOMStreak();
  }else{
    rows[rowNumber-1].setAttribute("id", "wrong");
    time -= 5;
  }

}

function gameloop(){
  time--;
  updateDOMTime(); // We redraw the time
  updateDOMStreak(); // We redraw the streak
  if(time<=0){
    looseGame();
  }
  var rows = document.getElementById("wrong");
  rows.removeAttribute("id");
}

function updateDOMTime(){
  var timediv = document.getElementById("whatdatimep");
  timediv.innerHTML = "Time: " + time;
}

function updateDOMStreak(){
  var streakdiv = document.getElementById("whatdastreakp");
  streakdiv.innerHTML = "Score: " + streak;
}

function looseGame(){
  window.clearInterval(loop);
  time = 0;
  updateDOMTime();
  drawLoose();
}

function drawLoose(){
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var overlay = document.getElementById("gameover");
  var message = document.getElementById("goexplanation");

  overlay.setAttribute("style", "display: block");
  message.innerHTML = "Lines " + currentBug.get("bug_lines") + ": " + currentBug.get("explanation");

  window.setTimeout(function ()
   {
       document.getElementById('scorername').focus();
   }, 0);

}

function next_round(){
  var random = Math.floor(Math.random()*rounds.length);
  currentBug = rounds[random];
  if (rounds.length === 0){
    //alert('You have finished all bugs for this language, please contribute more at github.com/bluehats/whatdabug');
    location.reload();
  }
  document.getElementsByTagName('tbody')[0].innerHTML = currentBug.get("code");
  rounds.splice(random, 1);
  lineClickHandlers();
}
