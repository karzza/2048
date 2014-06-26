// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var array1, array2, array3, array4, boardFull, collapseCells, generateTile, getColumn, getRandomCellIndices, getRow, mergeCells, move, ppArray, randomIndex, randomValue, setColumn, setRow, showboard;
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
    array1 = [0, 1, 2, 3];
    array2 = [0, 1, 2, 3];
    array3 = [0, 1, 2, 3];
    array4 = [0, 1, 2, 3];
    generateTile = function(board) {
      var val, x, y, _ref;
      if (!boardFull(board)) {
        val = randomValue();
        _ref =  getRandomCellIndices(), x = _ref[0], y = _ref[1];
        if (board[x][y] === 0) {
          return board[x][y] = val;
        } else {
          return generateTile(board);
        }
      }
    };
    randomIndex = function(x) {
      return Math.floor(Math.random() * x);
    };
    randomValue = function() {
      var values;
      values = [2, 2, 2, 4];
      return values[randomIndex(values.length)];
    };
    getRandomCellIndices = function() {
      return [randomIndex(4), randomIndex(4)];
    };
    boardFull = function(board) {
      var cell, row, _i, _j, _len, _len1;
      for (_i = 0, _len = board.length; _i < _len; _i++) {
        row = board[_i];
        for (_j = 0, _len1 = row.length; _j < _len1; _j++) {
          cell = row[_j];
          if (cell === 0) {
            return false;
          }
        }
      }
      return true;
    };
    collapseCells = function(cells, direction) {
      var i, padding, _i;
      cells = cells.filter(function(x) {
        return x !== 0;
      });
      padding = 4 - cells.length;
      for (i = _i = 0; 0 <= padding ? _i < padding : _i > padding; i = 0 <= padding ? ++_i : --_i) {
        switch (direction) {
          case 'right':
            cells.unshift(0);
            break;
          case 'left':
            cells.push(0);
            break;
          case 'down':
            cells.unshift(0);
            break;
          case 'up':
            cells.push(0);
        }
      }
      return cells;
    };
    mergeCells = function(arrayToMerge, direction) {
      var newArray, x, y, _i, _j, _k, _l, _ref, _ref1;
      newArray = arrayToMerge;
      switch (direction) {
        case 'up':
        case 'right':
          for (x = _i = 3; _i > 0; x = --_i) {
            for (y = _j = _ref = x - 1; _ref <= 0 ? _j <= 0 : _j >= 0; y = _ref <= 0 ? ++_j : --_j) {
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
          for (x = _k = 0; _k < 3; x = ++_k) {
            for (y = _l = _ref1 = x + 1; _ref1 <= 3 ? _l <= 3 : _l >= 3; y = _ref1 <= 3 ? ++_l : --_l) {
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
    getRow = function(rowNumber, board) {
      return board[rowNumber];
    };
    getColumn = function(columnNumber, board) {
      var column, row, _i;
      column = [];
      for (row = _i = 0; _i <= 3; row = ++_i) {
        column.push(board[row][columnNumber]);
      }
      return column;
    };
    setRow = function(row, rowNumber, board) {
      row = board[rowNumber];
      return board[rowNumber] = row;
    };
    setColumn = function(column, columnNumber, board) {
      var b, c;
      c = columnNumber;
      b = board;
      return b[0][c] = column[0], b[1][c] = column[1], b[2][c] = column[2], b[3][c] = column[3], column;
    };
    move = function(board, direction) {
      var i, row, _i, _j, _results, _results1;
      switch (direction) {
        case 'right':
          _results = [];
          for (i = _i = 0; _i <= 3; i = ++_i) {
            row = getRow(i, board);
            row = mergeCells(row, 'right');
            row = collapseCells(row, 'right');
            _results.push(setRow(row, i, board));
          }
          return _results;
          break;
        case 'left':
          _results1 = [];
          for (i = _j = 3; _j >= 0; i = --_j) {
            row = getColumn(i, board);
            row = mergeCells(row, 'left');
            row = collapseCells(row, 'left');
            _results1.push(setColumn(row, i, board));
          }
          return _results1;
      }
    };
    showboard = function(board) {
      var c, i, j, _i, _results;
      _results = [];
      for (i = _i = 3; _i >= 0; i = --_i) {
        _results.push((function() {
          var _j, _results1;
          _results1 = [];
          for (j = _j = 0; _j <= 3; j = ++_j) {
            c = board[i][j];
            _results1.push($(".r" + i + ".c" + j + ">div").html(c));
          }
          return _results1;
        })());
      }
      return _results;
    };
    $('body').keydown((function(_this) {
      return function(e) {
        var key, keys;
        key = e.which;
        keys = [37, 38, 39, 40];
        if ($.inArray(key, keys) > -1) {
          e.preventDefault();
        }
        switch (key) {
          case 37:
            console.log('left');
            move(_this.board, 'left');
            return ppArray(_this.board);
          case 38:
            return console.log('up');
          case 39:
            return console.log('right');
          case 40:
            return console.log('down');
        }
      };
    })(this));
    generateTile(this.board);
    generateTile(this.board);
    return ppArray(this.board);
  });

}).call(this);

//# sourceMappingURL=main.map
