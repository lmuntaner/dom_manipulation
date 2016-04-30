$(function () {
  var rows = 10;
  var cols = 10;
  var cells = [];
  function createGrid(root) {
    for(var i = 0; i < cols; i++) {
      for(var j = 0; j < cols; j++) {
        var cell = $('<div>').addClass('cell');
        cells.push(cell);
        root.append(cell);
      }
    }
  };

  var updateState = function() {
    cells.forEach(function (cell) {
      var randomNum = Math.random() * 2;
      if (randomNum > 1) {
        cell.addClass('active');
      } else {
        cell.removeClass('active');
      }
    });
  }

  setInterval(updateState, 500);

  var $root = $('.container');
  createGrid($root);
});
