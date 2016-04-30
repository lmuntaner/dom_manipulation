$(function () {
  var rows = 10;
  var cols = 10;
  var cells = [];
  var even = true;
  function createGrid(root) {
    for(var i = 0; i < cols; i++) {
      for(var j = 0; j < cols; j++) {
        var cell = $('<div>').addClass('cell');
        cell.attr('data-row', i).attr('data-col', j);
        cells.push(cell);
        root.append(cell);
      }
    }
  };

  function updateState() {
    cells.forEach(function (cell) {
      var row = Math.floor(cell.data('row'));
      var col = Math.floor(cell.data('col'));
      var sum = row + col;
      var isEven = sum % 2 == 0;
      if (isEven === even) {
        cell.addClass('active');
      } else {
        cell.removeClass('active');
      }
    });
    even = !even;
  }

  setInterval(updateState, 500);

  var $root = $('.container');
  createGrid($root);
});
