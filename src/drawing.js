var sortVis = document.getElementById("sortVis");
sortVis.width = 300;
sortVis.height = 300;
sortVis.style = "border:1px #000000;"

var ctx = sortVis.getContext("2d");

var randomColor = Math.floor(Math.random() * 16777215).toString(16);
var hash = "#";
var ranCol = hash.concat(randomColor);

function drawBar(ctx, upperLeftX, upperLeftY, width, height, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(upperLeftX, upperLeftY, width, height);
    ctx.restore();
}

drawBar(
    this.ctx,
    0,
    0,
    200,
    300,
    ranCol
);
