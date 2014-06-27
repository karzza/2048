// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var WinningTileValue, addScore, arrayEqual, boardEqual, boardFull, buildBoard, collapseCells, gameLost, gameWon, generateTile, getColumn, getRandomCellIndices, getRow, mergeCells, move, moveIsValid, noValidMoves, ppArray, randomIndex, randomValue, score, setColumn, setRow, setScoreZero, showBoard, showValue;
    score = 0;
    WinningTileValue = 2048;
    ppArray = function(array) {
      var row, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        row = array[_i];
        _results.push(console.log(row));
      }
      return _results;
    };
    buildBoard = function() {
      return [0, 1, 2, 3].map(function() {
        return [0, 1, 2, 3].map(function() {
          return 0;
        });
      });
    };
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
    arrayEqual = function(a, b) {
      var i, val, _i, _len;
      for (i = _i = 0, _len = a.length; _i < _len; i = ++_i) {
        val = a[i];
        if (val !== b[i]) {
          return false;
        }
      }
      return true;
    };
    boardEqual = function(a, b) {
      var c, i, row, _i, _len;
      for (i = _i = 0, _len = a.length; _i < _len; i = ++_i) {
        row = a[i];
        if (!arrayEqual(row, b[i])) {
          return false;
        }
      }
      true;
      a = [[0, 0], [0, 0]];
      b = [[0, 0], [0, 0]];
      return c = [[0, 0], [0, 1]];
    };
    moveIsValid = function(a, b) {
      return !boardEqual(a, b);
    };
    noValidMoves = function(board) {};
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
                addScore(newArray[x]);
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
      var b, r, _ref;
      _ref = [rowNumber, board], r = _ref[0], b = _ref[1];
      return [b[r][0], b[r][1], b[r][2], b[r][3]];
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
      return board[rowNumber] = row;
    };
    setColumn = function(column, columnNumber, board) {
      var b, c;
      c = columnNumber;
      b = board;
      return b[0][c] = column[0], b[1][c] = column[1], b[2][c] = column[2], b[3][c] = column[3], column;
    };
    move = function(board, direction) {
      var column, i, newBoard, row, _i, _j;
      newBoard = buildBoard();
      switch (direction) {
        case 'left':
        case 'right':
          for (i = _i = 0; _i <= 3; i = ++_i) {
            row = mergeCells(getRow(i, board), direction);
            row = collapseCells(row, direction);
            setRow(row, i, newBoard);
          }
          break;
        case 'up':
        case 'down':
          for (i = _j = 0; _j <= 3; i = ++_j) {
            column = mergeCells(getColumn(i, board), direction);
            column = collapseCells(column, direction);
            setColumn(column, i, newBoard);
          }
      }
      ppArray(newBoard);
      return newBoard;
    };
    gameWon = function(board) {
      var cell, row, _i, _j, _len, _len1;
      for (_i = 0, _len = board.length; _i < _len; _i++) {
        row = board[_i];
        for (_j = 0, _len1 = row.length; _j < _len1; _j++) {
          cell = row[_j];
          if (cell >= WinningTileValue) {
            return true;
          }
        }
      }
      return false;
    };
    addScore = function(x) {
      score = score + x;
      return $('.scoreboard > h2').html("score: " + score);
    };
    setScoreZero = function(board) {
      this.board = board;
      this.board = buildBoard;
      score = 0;
      return $('.scoreboard > h2').html("score: " + score);
    };
    gameLost = function(board) {
      return boardFull(board) && noValidMoves(board);
    };
    showValue = function(value) {
      if (value === 0) {
        return "";
      } else {
        return value;
      }
    };
    showBoard = function(board) {
      var c, i, j, _i, _results;
      _results = [];
      for (i = _i = 3; _i >= 0; i = --_i) {
        _results.push((function() {
          var _j, _results1;
          _results1 = [];
          for (j = _j = 0; _j <= 3; j = ++_j) {
            c = board[i][j];
            if (c === 0) {
              _results1.push($(".r" + i + ".c" + j + ">div").html(''));
            } else {
              _results1.push($(".r" + i + ".c" + j + ">div").html(c));
            }
          }
          return _results1;
        })());
      }
      return _results;
    };
    $('body').keydown((function(_this) {
      return function(e) {
        var direction, key, keys, newBoard;
        key = e.which;
        keys = [37, 38, 39, 40];
        if ($.inArray(key, keys) > -1) {
          e.preventDefault();
        }
        direction = (function() {
          switch (key) {
            case 37:
              return 'left';
            case 38:
              return 'up';
            case 39:
              return 'right';
            case 40:
              return 'down';
          }
        })();
        newBoard = move(_this.board, direction);
        if (moveIsValid(newBoard, _this.board)) {
          _this.board = newBoard;
          generateTile(_this.board);
          showBoard(_this.board);
          console.log(gameLost(_this.board));
          if (gameLost(_this.board)) {
            console.log("Game Over!!");
            return alert("Game Over!!");
          } else if (gameWon(_this.board)) {
            console.log("Victory!!");
            return alert("Victory");
          }
        }
      };
    })(this));
    this.board = buildBoard();
    generateTile(this.board);
    generateTile(this.board);
    ppArray(this.board);
    showBoard(this.board);
    return $('#resetButton').click((function(_this) {
      return function() {
        setScoreZero(_this.board);
        _this.board = buildBoard();
        generateTile(_this.board);
        generateTile(_this.board);
        return showBoard(_this.board);
      };
    })(this));
  });

}).call(this);

//# sourceMappingURL=main.map
