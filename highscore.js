Parse.initialize("ClD5oh3fnQEazfTo0krsLVi4jzuaEVFa28tNRQX3", "uCX34q9IKUJJWAICjevodjSz8dpU0xN3sT9J8IHY");
var HighScore = Parse.Object.extend("HighScore");
var queryScores = new Parse.Query(HighScore);
queryScores.descending("score");
queryScores.limit(10);

queryScores.find({
	success: function(scores)
	{	
		for (var i = 0; i < scores.length; i++){
			
			var tr = document.createElement('tr');

			tr.appendChild(document.createElement('td'));
			tr.appendChild(document.createElement('td'));
			tr.appendChild(document.createElement('td'));

			var score = scores[i];
			var cont = i +1;
			tr.cells[0].appendChild(document.createTextNode(cont));
			tr.cells[1].appendChild(document.createTextNode(score.get('username')));
			tr.cells[2].appendChild(document.createTextNode(score.get('score')));

			var tbody = document.getElementsByTagName('tbody')[0];

			tbody.appendChild(tr);
		}	
	},
	error: function(error)
	{
		console.log("error in query");
	}
});