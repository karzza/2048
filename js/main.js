// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var array1, array2, array3, array4, board, boardFull, collapseCells, generateTile, getColumn, masterArray, mergeCells, ppArray, randomIndex, randomValue, x, y, _i, _j;
    ppArray = function(array) {
      var row, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        row = array[_i];
        _results.push(console.log(row));
      }
      return _results;
    };
    this.board = [0, 1, 2, 3].map(function(x) {
      return [0, 1, 2, 3].map(function(y) {
        return 0;
      });
    });
    ppArray(this.board);
    array1 = [0, 1, 2, 3];
    array2 = [0, 1, 2, 3];
    array3 = [0, 1, 2, 3];
    array4 = [0, 1, 2, 3];
    masterArray = function() {
      var x;
      return x = array1 + array2 + array3 + array4;
    };
    masterArray();
    board = [];
    for (x = _i = 0; _i <= 3; x = ++_i) {
      board[x] = [];
      for (y = _j = 0; _j <= 3; y = ++_j) {
        board[x][y] = 0;
      }
    }
    ppArray(board);
    generateTile = function(board) {
      var val, _ref;
      if (!boardFull(board)) {
        val = getRandomCell();
        _ref = getRandomCell(), x = _ref[0], y = _ref[1];
        if (board[x][y] = 0) {
          return board[x][y] = val;
        } else {
          return generateTitle(board);
        }
      }
    };
    randomIndex = function(x) {
      var i, _k, _results;
      Math.floor(Math.random() * x);
      _results = [];
      for (i = _k = 0; _k <= 1000; i = ++_k) {
        _results.push(console.log(randomIndex()));
      }
      return _results;
    };
    randomValue = function() {
      var val, values;
      values = [2, 2, 2, 4];
      val = values[randomIndex(values.length) * 3];
      return console.log(randomValues);
    };
    console.log(ppArray(this.board));
    boardFull = function(board) {
      var cell, row, _k, _l, _len, _len1;
      for (_k = 0, _len = board.length; _k < _len; _k++) {
        row = board[_k];
        for (_l = 0, _len1 = row.length; _l < _len1; _l++) {
          cell = row[_l];
          if (cell === 0) {
            return false;
          }
        }
      }
      return true;
    };
    getColumn = function(board, column) {
      var cells, row, _k, _len, _ref;
      cells = [];
      _ref = [0.3];
      for (_k = 0, _len = _ref.length; _k < _len; _k++) {
        row = _ref[_k];
        cells.push(board[row][column]);
      }
      return cells;
    };
    collapseCells = function(cells, direction) {};
    console.log("collapseCells" + collapseCells([0, 2, 0, 4], 'left'));
    console.log("collapseCells" + collapseCells([0, 2, 0, 4], 'right'));
    $('body').keydown(function(e) {
      var key;
      console.log(e.which);
      key = e.which;
      key = [37, 38, 39, 40];
      if ($.inArray(key, keys) > -1) {
        e.preventDefault();
        switch (key) {
          case 37:
            console.log('left');
            break;
          case 38:
            console.log('up');
            break;
          case 39:
            console.log('right');
            break;
          case 40:
            console.log('down');
        }
      }
      generateTitle(this.board);
      return ppArray(this.board);
    });
    mergeCells = function(arrayToMerge, direction) {
      var newArray, _k, _l, _m, _n, _ref, _ref1;
      newArray = arrayToMerge;
      switch (direction) {
        case 'up':
        case 'right':
          for (x = _k = 3; _k > 0; x = --_k) {
            for (y = _l = _ref = x - 1; _ref <= 0 ? _l <= 0 : _l >= 0; y = _ref <= 0 ? ++_l : --_l) {
              if (newArray[x] === 0) {
                break;
              } else if (newArray[x] === newArray[y]) {
                newArray[x] = newArray[x] * 2;
                newArray[y] = 0;
                break;
              } else if (newArray[y] !== 0) {
                break;
              }
            }
          }
          break;
        case 'down':
        case 'left':
          for (x = _m = 0; _m < 3; x = ++_m) {
            for (y = _n = _ref1 = x + 1; _ref1 <= 3 ? _n <= 3 : _n >= 3; y = _ref1 <= 3 ? ++_n : --_n) {
              if (newArray[x] === 0) {
                break;
              } else if (newArray[x] === newArray[y]) {
                newArray[x] = newArray[x] * 2;
                newArray[y] = 0;
                break;
              } else if (newArray[y] !== 0) {
                break;
              }
            }
          }
      }
      return newArray;
    };
    console.log("mergeCells " + mergeCells([2, 2, 2, 2]));
    console.log("mergeCells " + mergeCells([2, 2, 2, 2]));
    console.log("mergeCells " + mergeCells([2, 2, 4, 2]));
    return console.log("mergeCells " + mergeCells([4, 2, 2, 2]));
  });

}).call(this);

//# sourceMappingURL=main.map
