var sortBox = document.getElementById('sortBox');

var sortSelect = document.createElement('select');
sortSelect.setAttribute('id', 'sortSelect');
sortSelect.setAttribute('onchange', 'callSort()');

var noSortOption = document.createElement('option');
noSortOption.text = "Unsorted";
sortSelect.append(noSortOption);

var insertionOption = document.createElement('option');
insertionOption.text = "Insertion Sort";
sortSelect.append(insertionOption);

sortBox.append(sortSelect);