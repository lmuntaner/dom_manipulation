$(function () {

  function buildGrid(root) {
    for (var i = 1; i <= 10; i++) {
      for (var j = 1; j <= 10; j++) {
        var cell = $('<div>').addClass('cell');
        cell.attr('data-row', i).attr('data-col', j);
        root.append(cell);
      }
    }
  }

  function addListeners() {
    $('.cell').on('click', function (event) {
      var cell = $(event.currentTarget);
      var id = cell.data('row') + "" + cell.data('col');
      var url = 'http://pokeapi.co/api/v2/pokemon/' + id + '/';
      var interval = setInterval(function () {
        cell.toggleClass('active');
      }, 300)
      $.ajax({
        url: url,
        method: 'get',
        success: function (response) {
          clearInterval(interval);
          cell.addClass('active');
          var imageUrl = response.sprites.front_default;
          cell.css('background-image', 'url(' + imageUrl + ')');
        }
      })
    })
  }

  var container = $('.container')
  buildGrid(container);
  addListeners();
});
