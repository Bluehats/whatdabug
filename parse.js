Parse.initialize("ClD5oh3fnQEazfTo0krsLVi4jzuaEVFa28tNRQX3", "uCX34q9IKUJJWAICjevodjSz8dpU0xN3sT9J8IHY");

var Bug = Parse.Object.extend("Bug"); //clase bug
var query = new Parse.Query(Bug);

query.equalTo("language", "c++");
//query.limit(1); limit number of bugs on array

query.find({
  success: function(bugs)
  {
    rounds = bugs;
    init_game();
  },
  error: function(error)
  {
    console.log(error);
  }
});
