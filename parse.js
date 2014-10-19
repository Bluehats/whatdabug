Parse.initialize("ClD5oh3fnQEazfTo0krsLVi4jzuaEVFa28tNRQX3", "uCX34q9IKUJJWAICjevodjSz8dpU0xN3sT9J8IHY");

var Bug = Parse.Object.extend("Bug"); //clase bug
var query = new Parse.Query(Bug);

query.equalTo("language", "c++");
//query.limit(1); limit number of bugs on array

query.find({
  success: function(bugs)
  {
    var random = Math.floor(Math.random()*bugs.length);
    currentBug = bugs[random];
    document.getElementsByTagName('tbody')[0].innerHTML = currentBug.get("code");
    lineClickHandlers();
  },
  error: function(error)
  {
    console.log(error);
  }
});
