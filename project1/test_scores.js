var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

var displayResults = function(){
var total= 0;
var highest = -1;
var highest_index = 0;
var average = 0;

    if (scores.length != 0)
	{
		
		for(var i =0; i <scores.length; i++)
		{
			total += scores[i];
			if(scores[i] > highest)
			{
				highest = scores[i];
				highest_index = i;
			}
		}
		average = parseFloat(total/scores.length);
		var student_highest = names[highest_index];
		// var html_str = "<h1>Result</h1><p>Average score = 000</p>"
		// console.log(html_str);
		var html_str = "<h2>Results</h2><p>average scores =</p>"+average+"<p>highest score</p>="+student_highest+"<p>with a score of "+highest;
        $("results").innerHTML = html_str; 
	}
};
var addScore = function()
{
 var name = $("name").value;
 if (name === "")
	{
	   $("name_error").innerHTML = "Invalid Name input"
	}
	else
	{
       $("name_error").innerHTML = ""
	}

 var score = $("score").value;
 if (score === "")
 {
	$("score_error").innerHTML = "Invalid Score input"
 }
 else
	{
       $("score_error").innerHTML = ""  
	}
	names[names.length] = name;
	scores[scores.length] = parseFloat(score);
};
var displayScores = function()
{
// for(var i = 0; i++; i < scores.length){
// 	console.log(names[i]+""+scores[i]);
var html_str = "<h2>Scores</h2>"
var table_head = " <tr><th>Names</th><th>Scores</th></tr>"
var table_content ="";
html_str += table_head;
for(var i = 0; i < scores.length; i++)
{
	table_content += "<tr>";
	table_content +="<td>"+names[i]+"</td>";
	table_content += "<td>"+scores[i] + "</td>";
	table_content += "</tr>";
}
html_str += table_content;
$("scores_table").innerHTML = html_str;
};

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


