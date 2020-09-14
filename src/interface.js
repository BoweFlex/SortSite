/* 
* Beginning of User Input additions
*/
var sortBox = document.getElementById('sortBox');

var numInput = document.createElement('input');
numInput.setAttribute('id', 'numInput');
numInput.setAttribute('type', 'number');

var sortSelect = document.createElement('select');
sortSelect.setAttribute('id', 'sortSelect');
sortSelect.setAttribute('onchange', 'callSort()');

var noSortOption = document.createElement('option');
noSortOption.text = "Unsorted";
sortSelect.append(noSortOption);

var insertionOption = document.createElement('option');
insertionOption.text = "Insertion Sort";
sortSelect.append(insertionOption);

sortBox.append(numInput);
sortBox.append(sortSelect);
/*
* End of User Input additions
*/

/*
* Beginning of Output additions
*/

var outBox = document.getElementById('outBox');

/*
* End of Output additions
*/