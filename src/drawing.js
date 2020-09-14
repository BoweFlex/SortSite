var sortVis = document.getElementById("sortVis");
sortVis.width = 300;
sortVis.height = 300;
sortVis.style = "border:1px #000000;"

var ctx = sortVis.getContext("2d");

let nums = [1, 4, 3, 2, 6, 9, 12, 8, 10, 7, 11];

function drawBar(ctx, upperLeftX, upperLeftY, width, height, color) {
    //ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(upperLeftX, upperLeftY, width, height);
    //ctx.restore();
}

var Barchart = function(options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");

    var maxValue = 0;
    for (var item in this.options.data) {
        maxValue = Math.max(maxValue, this.options.data[item])
    }

    this.draw = function() {
        var canvasActualHeight = this.canvas.height - 20;
        var canvasActualWidth = this.canvas.width - 20;
        
        var barIndex = 0;
        var barNums = this.options.data.length;
        var barWidth = canvasActualWidth / barNums;

        for (item in this.options.data) {
            var val = this.options.data[item];
            var barHeight = Math.round(val * canvasActualHeight / maxValue);
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            var hash = "#";
            var ranCol = hash.concat(randomColor);

            drawBar(
                this.ctx,
                barIndex * barWidth,
                this.canvas.height - barHeight,
                barWidth,
                barHeight,
                ranCol
            );

            barIndex++;
        }
    }
}

var bars = new Barchart(
    {
    canvas: sortVis,
    data: nums
    }
);
bars.draw();

function insertionSort(options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");

    for (item in this.options.data) {
        var value = this.options.data[item];
        var comp = item;

        while ((comp > 0) && (this.options.data[comp - 1] > value)) {
            this.options.data[comp] = this.options.data[comp - 1];
            comp--;
        }
        this.options.data[comp] = value;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        var sortBar = new Barchart(
            {
                canvas: sortVis,
                data: this.options.data
            }
        );
        sortBar.draw();
    }
}

function callSort() {
    insertionSort(
        {
            canvas: sortVis,
            data: nums
        }
    );
}