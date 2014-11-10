//Brad Harris

var buildTable = function(n){
    var table = document.createElement('table');
    var row1 = document.createElement('tr');
    var row2 = document.createElement('tr'); 
    for ( var i = 0; i <= 10; i++){
	var cells = document.createElement('td');
	var cells2 = document.createElement('td');
	var text = document.createTextNode(i);
	var text2 = document.createTextNode(n * i);
	cells.appendChild(text);
	cells2.appendChild(text2);
	row1.appendChild(cells);
        row2.appendChild(cells2);
    }
    table.appendChild(row1);
    table.appendChild(row2);
    return table;
}
var getNum = function(){
    var input = document.getElementById("values").value;
    var n = parseInt(input);
    return n;
}
var calculate = function(){
    var n = getNum();
    var table = buildTable(n);
    document.body.appendChild(table);
}
var button = document.getElementById("go");
button.onclick = calculate;
