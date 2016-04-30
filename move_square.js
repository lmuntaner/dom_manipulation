$(function () {
  var rows = 10;
  var cols = 10;
  var cells = [];
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

  function moveDown() {
    var active = $('.active');
    active.removeClass('active');
    var row = active.data('row');
    var col = active.data('col');
    var nextRow = (row + 1) % rows;
    var nextCellSelector = '[data-row=' + nextRow + ']' + '[data-col=' + col + ']';
    $(nextCellSelector).addClass('active');
  }

  function moveLeft() {
    var active = $('.active');
    active.removeClass('active');
    var row = active.data('row');
    var col = active.data('col');
    var nextCol = (col - 1);
    nextCol = nextCol < 0 ? nextCol + cols : nextCol;
    var nextCellSelector = '[data-row=' + row + ']' + '[data-col=' + nextCol + ']';
    $(nextCellSelector).addClass('active');
  }

  function moveRight() {
    var active = $('.active');
    active.removeClass('active');
    var row = active.data('row');
    var col = active.data('col');
    var nextCol = (col + 1) % cols;
    var nextCellSelector = '[data-row=' + row + ']' + '[data-col=' + nextCol + ']';
    $(nextCellSelector).addClass('active');
  }

  function moveUp() {
    var active = $('.active');
    active.removeClass('active');
    var row = active.data('row');
    var col = active.data('col');
    var nextRow = (row - 1);
    nextRow = nextRow < 0 ? nextRow + rows : nextRow;
    var nextCellSelector = '[data-row=' + nextRow + ']' + '[data-col=' + col + ']';
    $(nextCellSelector).addClass('active');
  }

  var moves = {
    '97': moveLeft,
    '115': moveDown,
    '119': moveUp,
    '100': moveRight
  }

  var $root = $('.container');
  createGrid($root);
  $('.cell').on('click', function (e) {
    $('.active').removeClass('active');
    $(e.currentTarget).addClass('active');
  });

  $('body').on('keypress', function (e) {
    moves[e.keyCode]();
  });
});
