var sortVis = document.getElementById("sortVis");
sortVis.width = 300;
sortVis.height = 300;
sortVis.style = "border:1px #000000;"

var ctx = sortVis.getContext("2d");

var randomColor = Math.floor(Math.random() * 16777215).toString(16);

ctx.fillRect(20, 20, 100, 200);