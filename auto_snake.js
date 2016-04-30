$(function () {
  var rows = 10;
  var cols = 10;
  var cells = [];
  var even = true;
  var snake = [];
  var initialVel = [0, 1];
  var snakeVel = [];
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

  function resetGrid() {
    for(var i = 0; i < cols; i++) {
      for(var j = 0; j < cols; j++) {
        getCell(i, j).removeClass('active').removeClass('active-head');
      }
    }
  }

  function getCell(row, col) {
    var selector = '[data-row=' + row + '][data-col=' + col + ']';
    return $(selector);
  }

  function createSnake() {
    var row = Math.floor(Math.random() * rows);
    var col = Math.floor(Math.random() * cols);

    var head = getCell(row, col).addClass('active-head');
    snake.push(head);
    snakeVel.push(initialVel);
    createTail(head, [0, -1], 4);
  };

  function createTail(head, dir, numCells) {
    for(var i = 0; i < numCells; i++) {
      var dx = i * dir[0];
      var dy = i * dir[1];
      var tailRow = head.data('row') + dx;
      var tailCol = head.data('col') + dy;
      tailRow = (tailRow + rows) % rows;
      tailCol = (tailCol + cols) % cols;
      var tail = getCell(tailRow, tailCol).addClass('active');
      snake.push(tail);
      snakeVel.push(initialVel);
    }
  }

  function move() {
    resetGrid();
    var tempSnake = [];
    for(var i = 0; i < snake.length; i++) {
      var dx = snakeVel[i][0];
      var dy = snakeVel[i][1];
      var cell = snake[i];
      var tailRow = cell.data('row') + dx;
      var tailCol = cell.data('col') + dy;
      tailRow = (tailRow + rows) % rows;
      tailCol = (tailCol + cols) % cols;
      var snakeClass = i === 0 ? 'active-head' : 'active';
      tempSnake.push(getCell(tailRow, tailCol).addClass(snakeClass));
    }
    snake = tempSnake;
  }

  var $root = $('.container');
  createGrid($root);
  createSnake();
  setInterval(move, 500);
});
